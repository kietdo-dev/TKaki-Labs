# TKaki-Labs

Cửa hàng tiếng Việt, xây dựng bằng Next.js (App Router). Xem `MIGRATION_REPORT.md`.

## Chỉnh sửa nội dung

- `lib/content.ts`: thông tin các sản phẩm, màu trong ảnh, giá, bảng size, liên hệ và toàn bộ đích mua hàng.
- `public/assets/products/`: ảnh sản phẩm đã tối ưu, chia theo mẫu `short/`, `cargo/`, `piped-cargo/` và `plaid/`. Ảnh nguồn nằm trong `Documents/Shop/<mẫu>/Product/`; các thư mục `Raw` được bỏ qua.
- `links.shopeeShop`: link shop Shopee cho đầu trang, trang chủ và chân trang.
- `products[].shopeeUrl`: link chính xác của từng mẫu quần cho trang chi tiết.
- Để `null` khi chưa có giá, mô tả, chất liệu, phom, hướng dẫn bảo quản hoặc link. Không dùng link minh họa.
- `colors` mô tả các màu thể hiện trong ảnh, không xác nhận tình trạng còn hàng. Chỉ điền `sizes` khi có bảng size tương ứng.
- Thêm màu dạng `{name: 'Tên màu', imageIndex: 0}` để bấm tên màu sẽ đổi ảnh tương ứng (chỉ số ảnh bắt đầu từ 0).
- `sizeGuide.rows` gồm `{size, waist, hip, length, leg}` tương ứng tên size, lưng quần, mông quần, dài quần, ống quần; đơn vị cm. Hãy ghi rõ đo ngang hay đo vòng trong phần chú thích khi có bảng thật.
- Mẫu quần short kaki dùng ảnh bảng size riêng; mẫu túi hộp và viền sọc dùng chung ảnh bảng size quần lửng. Mẫu caro chưa có bảng size.
- Logo gốc được giữ nguyên tại `public/assets/logo.png`; giao diện chỉ ẩn phần lề trắng thừa bằng CSS.

## Trước khi mở bán

Bổ sung giá nếu muốn hiển thị, chất liệu/phom, size, hướng dẫn bảo quản, link shop và link sản phẩm Shopee. Xác nhận tình trạng màu/size trước khi giới thiệu là đang bán. Chỉ thêm chính sách giao hàng và đổi trả khi đã xác nhận.

## Cấu trúc

`app/` (layout, trang, `globals.css`), `components/Site.tsx`, `lib/content.ts`, `public/assets/`. Bản tĩnh cũ còn trong `dist/` chỉ để đối chiếu.
Trang sản phẩm dùng địa chỉ `#san-pham/<id>`, hỗ trợ điều hướng quay lại bằng trình duyệt. Nút Shopee chưa có link sẽ bị vô hiệu hóa. Không có giỏ hàng hoặc thanh toán nội bộ.

## Chạy trên máy

```sh
npm install
npm run dev
# production: npm run build && npm start
```
