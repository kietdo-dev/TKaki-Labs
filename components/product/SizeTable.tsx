import type { Product } from '@/lib/content';

const bodyColumns = ['Size', 'Vòng eo', 'Vòng mông', 'Chiều cao', 'Cân nặng'];
const garmentColumns = ['Size', 'Lưng quần', 'Mông quần', 'Dài quần', 'Ống quần'];

export default function SizeTable({ product }: { product: Product }) {
  const guide = product.sizeGuide;
  const isBodyMeasurement = guide.measurementType === 'body';
  const columns = isBodyMeasurement ? bodyColumns : garmentColumns;

  return (
    <>
      {guide.image ? (
        <figure className="size-chart">
          <img
            src={guide.image.src}
            alt={guide.image.alt}
            width={1200}
            height={1500}
            loading="lazy"
          />
        </figure>
      ) : (
        <div
          className="table-wrap"
          tabIndex={0}
          aria-label="Bảng số đo, có thể cuộn ngang trên màn hình nhỏ"
        >
          <table>
            <caption>
              Số đo {isBodyMeasurement ? 'cơ thể' : 'quần'} · Đơn vị: {guide.unit}
            </caption>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th scope="col" key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {guide.rows.length ? (
                guide.rows.map((row) => (
                  <tr key={row.size}>
                    <th scope="row">{row.size}</th>
                    <td>{row.waist}</td>
                    <td>{row.hip}</td>
                    <td>{row.length}</td>
                    <td>{row.leg}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="empty-table">
                    Bảng số đo đang được bổ sung.
                    <br />
                    Vui lòng liên hệ shop trước khi chọn.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
      <p className="table-note">
        {guide.image
          ? 'Cân nặng trong bảng chỉ mang tính tham khảo; ưu tiên chọn theo dáng mặc mong muốn.'
          : isBodyMeasurement
            ? 'Đây là số đo cơ thể.'
            : 'Đây là số đo của quần, không phải số đo cơ thể.'}{' '}
        Thông tin size không thể hiện tình trạng còn hàng.
      </p>
    </>
  );
}
