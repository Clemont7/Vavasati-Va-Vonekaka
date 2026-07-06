import logo from '@/assets/3V_brand_book/img3.jpeg';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-sand bg-ivory">
      <div className="container-max flex flex-col gap-4 px-gutter py-8 md:flex-row md:items-center md:justify-between">
        <img src={logo} alt="Vavasati Va Vonekaka - 3V" className="h-9 w-auto" />
        <p className="font-body text-sm text-primary-terracotta">
          © {new Date().getFullYear()} Vavasati Va Vonekaka. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
