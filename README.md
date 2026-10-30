# TKaki-Labs

Cửa hàng tiếng Việt, xây dựng bằng Next.js (App Router). Xem `MIGRATION_REPORT.md`.

## Chỉnh sửa nội dung

- `lib/content.ts`: thông tin sản phẩm, ảnh, giá, bảng số đo, liên hệ và toàn bộ đích mua hàng.
- `links.shopeeShop`: link shop Shopee cho đầu trang, trang chủ và chân trang.
- `products[0].shopeeUrl`: link chính xác của mẫu quần cho trang chi tiết.
- Để `null` khi chưa có giá, mô tả, chất liệu, phom, hướng dẫn bảo quản hoặc link. Không dùng link minh họa.
- `colors` và `sizes` chỉ điền khi đã xác nhận các lựa chọn đang bán. Ảnh hiện có không được coi là xác nhận hàng có sẵn.
- Thêm màu dạng `{name: 'Tên màu', imageIndex: 0}` để bấm tên màu sẽ đổi ảnh tương ứng (chỉ số ảnh bắt đầu từ 0).
- `sizeGuide.rows` gồm `{size, waist, hip, length, leg}` tương ứng tên size, lưng quần, mông quần, dài quần, ống quần; đơn vị cm. Hãy ghi rõ đo ngang hay đo vòng trong phần chú thích khi có bảng thật.
- Logo gốc được giữ nguyên tại `public/assets/logo.png`; giao diện chỉ ẩn phần lề trắng thừa bằng CSS.

## Trước khi mở bán

Bổ sung tên chính thức, giá nếu muốn hiển thị, chất liệu/phom, màu và size được bán, cách đo/bảng số đo, hướng dẫn bảo quản, link shop và link sản phẩm Shopee. Xác nhận ảnh đã gửi thuộc cùng mẫu sản phẩm. Chỉ thêm chính sách giao hàng và đổi trả khi đã xác nhận.

## Cấu trúc

`app/` (layout, trang, `globals.css`), `components/Site.tsx`, `lib/content.ts`, `public/assets/`. Bản tĩnh cũ còn trong `dist/` chỉ để đối chiếu.
Trang sản phẩm dùng địa chỉ `#san-pham/short-kaki`, hỗ trợ điều hướng quay lại bằng trình duyệt. Nút Shopee chưa có link sẽ bị vô hiệu hóa. Không có giỏ hàng hoặc thanh toán nội bộ.

## Chạy trên máy

```sh
npm install
npm run dev
# production: npm run build && npm start
```
