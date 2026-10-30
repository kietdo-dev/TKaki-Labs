import { type ReactNode } from 'react';

export const arrow = <span aria-hidden="true">↗</span>;

export function getShopeeUrl(value: string | null): string | null {
  try {
    const url = new URL(value ?? '');
    return url.protocol === 'https:' &&
      /(^|\.)shopee\.(vn|com|ee)$/.test(url.hostname)
      ? url.href
      : null;
  } catch {
    return null;
  }
}

export function Price({ value }: { value: number | null }) {
  if (value == null) return null;

  return (
    <p className="price">
      {new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(value)}
    </p>
  );
}

export function Buy({
  url: value,
  extra = '',
}: {
  url: string | null;
  extra?: string;
}) {
  const url = getShopeeUrl(value);
  const className = `btn ${extra}`.trim();

  return url ? (
    <a className={className} href={url} target="_blank" rel="noopener noreferrer">
      Mua trên Shopee {arrow}
    </a>
  ) : (
    <button className={className} disabled title="Link Shopee đang được bổ sung">
      Mua trên Shopee {arrow}
    </button>
  );
}

export function Logo() {
  return (
    <a href="#" className="logo" aria-label="TKaki-Labs — Trang chủ">
      <img
        src="/assets/logo.png"
        alt="TKaki-Labs"
        width={180}
        height={180}
        loading="lazy"
      />
    </a>
  );
}

export function LinkArrow({ children }: { children: ReactNode }) {
  return (
    <>
      {children} <span aria-hidden="true">↗</span>
    </>
  );
}
