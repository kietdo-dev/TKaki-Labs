# MIGRATION_REPORT

## Phiên bản
- Next.js **16.4.3** (stable, `npm view next version` / dist-tag `latest`), App Router, Turbopack.
- React / React DOM **19.3.1**, TypeScript 6.0.3, ESLint 9 + eslint-config-next 16.4.3.
- Node.js 25.9.0 trên máy kiểm thử (Next 16 yêu cầu Node ≥ 20.9).

## Thay đổi chính
- Site tĩnh (`dist/`: HTML + vanilla JS + CSS) → Next.js:
  - `app/layout.tsx`: `<html lang="vi">`, metadata (description, icon, theme-color), preload ảnh hero.
  - `app/page.tsx` + `components/Site.tsx` (Client Component): toàn bộ giao diện, port 1-1 từ `dist/app.js`; `lib/content.ts` thay `dist/content.js` (có kiểu TypeScript, nội dung giữ nguyên).
  - `app/globals.css`: copy nguyên `dist/styles.css`, không sửa.
  - `public/assets/`: ảnh/logo giữ nguyên.
- URL giữ nguyên dạng hash (`#san-pham/short-kaki`, `#san-pham/short-kaki/bang-size`, `#bang-size`...) nên cần client component; trang được prerender tĩnh (trang chủ render sẵn ở server, đổi view sau hydrate).
- `<title>` đổi theo view như bản cũ.
- Thêm `package.json`, `tsconfig.json`, `next.config.mjs`, `eslint.config.mjs`, `.gitignore`, lockfile. Không có biến môi trường nên không cần `.env.example`.
- `dist/` bản cũ được giữ lại để đối chiếu (không còn dùng); có thể xóa sau khi review.

## Refactor và SEO
- Tách `Site.tsx` thành các module theo trách nhiệm:
  - `components/layout/`: header/menu mobile và footer/liên hệ.
  - `components/home/`: hero, collection, size intro, about và FAQ.
  - `components/product/`: bảng size và chi tiết sản phẩm.
  - `components/shared/`: nút Shopee, giá, logo và các helper dùng chung.
- Giữ nguyên class CSS, nội dung, hash URL và hành vi tương tác; `Site.tsx` hiện chỉ điều phối route hash, title, zoom dialog và layout.
- Bổ sung metadata SEO: title template, description, keywords, canonical, Open Graph, Twitter card, robots và `metadataBase`.
- Bổ sung JSON-LD cho `Organization` và `Product`, cùng route `robots.txt`/`sitemap.xml`.
- Đặt `NEXT_PUBLIC_SITE_URL` trong `.env` production để canonical, social image, sitemap và JSON-LD dùng đúng domain thật. Khi chưa đặt, metadata dùng `http://localhost:3000` để tránh URL tương đối không hợp lệ trong build.

## Lệnh chạy
```sh
npm install
npm run dev        # phát triển
npm run build && npm start   # production
npm run typecheck
npm run lint
```

## Kiểm tra
- `typecheck`, `lint`, `build` production: đều pass, không cảnh báo.
- Chạy `next start`, Playwright Chromium: trang chủ, chi tiết (tải trực tiếp, refresh, back), cuộn tới `#bang-size`/`bang-size` chi tiết, chuyển ảnh hero, chọn thumbnail, zoom ảnh, menu mobile — hoạt động; không có lỗi/cảnh báo console, không lỗi hydration.
- So sánh ảnh full-page trước/sau (desktop 1440×900, mobile 390×844, 11 ảnh): 8 ảnh giống hệt pixel; 3 ảnh desktop và 1 ảnh mobile chỉ lệch 16–17 pixel (khử răng cưa chữ), không đổi bố cục.
- Dự án chưa có test có sẵn. Chưa kiểm tra trình duyệt Safari/Firefox; chưa kiểm tra link Shopee thật (dữ liệu hiện là `null`, nút vô hiệu hóa như cũ).

## Lưu ý / khác biệt
- Khi tải trực tiếp URL chi tiết, HTML render sẵn là trang chủ rồi chuyển sang chi tiết sau hydrate (hash không gửi lên server) — có thể thấy chớp ngắn; bản cũ để `<main>` trống đến khi JS chạy.
- README.md còn mô tả bản tĩnh cũ; chưa cập nhật mục "Cấu trúc"/"Mở website" (nội dung chỉnh sửa nay ở `lib/content.ts`).
- Thư mục không phải Git repo nên không có Git status để bảo toàn; chưa commit/push.
