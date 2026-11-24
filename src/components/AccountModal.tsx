import { X, User, ExternalLink } from 'lucide-react';
import { SITE_BASE_URL, STORE_INFO } from '../data/homepageData';
import { SafeImage } from './SafeImage';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AccountModal({ isOpen, onClose }: AccountModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Account"
    >
      <div
        className="fixed inset-0 bg-black/45 backdrop-blur-xs"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close account dialog"
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F8F1] text-[#569A3B]">
            <User className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#151515]">My Account</h2>
            <p className="text-xs text-zinc-500">{STORE_INFO.shortBrand}</p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-zinc-600">
          Sign in or manage your orders, delivery addresses, wish list, and wallet on 3KG Fresh Market.
        </p>

        <div className="mt-5 grid gap-2.5">
          <a
            href={`${SITE_BASE_URL}/account`}
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#6CC04A] text-sm font-bold text-white transition-colors hover:bg-[#569A3B]"
          >
            <span>Sign In / My Account</span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={`${SITE_BASE_URL}/account/orders`}
            className="flex h-10 items-center justify-center rounded-xl border border-zinc-200 text-xs font-bold text-[#151515] transition-colors hover:border-[#6CC04A] hover:text-[#569A3B]"
          >
            Order History
          </a>
        </div>

        <div className="mt-5 flex items-center justify-center border-t border-zinc-100 pt-4">
          <SafeImage
            src={STORE_INFO.logo}
            alt={STORE_INFO.brandName}
            className="h-8 w-auto object-contain opacity-80"
          />
        </div>
      </div>
    </div>
  );
}
