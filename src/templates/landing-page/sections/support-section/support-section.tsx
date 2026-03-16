import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";

export const SupportSection = () => {
  return (
    <section className="relative w-full bg-gray-700 pb-8 md:py-10">
      <div className="absolute inset-0 hidden bg-[url('/background-features.svg')] bg-cover bg-center bg-no-repeat opacity-90 md:block" />

      <div className="relative container flex flex-col items-center gap-12">
        <h2 className="text-heading-xl text-center font-sans text-balance text-gray-100">
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Primeiro Card */}
          <div className="flex flex-col gap-2 rounded-lg bg-blue-400 p-6 text-left md:p-12">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300">
              <PaintbrushVertical className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Personalize seu site
            </strong>
            <p className="text-body-sm text-gray-200">
              Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com
              a sua cara.
            </p>
          </div>

          {/* Segundo Card */}
          <div className="flex flex-col gap-2 rounded-lg bg-cyan-300 p-6 text-left md:p-12">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-200">
              <Store className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Venda de qualquer loja
            </strong>
            <p className="text-body-sm text-gray-200">
              Não importa a loja, o Site.Set permite que você insira qualquer
              link de afiliado.
            </p>
          </div>

          {/* Terceiro Card */}
          <div className="flex flex-col gap-2 rounded-lg bg-blue-400 p-6 text-left md:p-12">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-300">
              <HeartHandshake className="h-6 w-6 text-white" />
            </div>
            <strong className="text-heading-sm text-gray-100">
              Receba suporte amigável
            </strong>
            <p className="text-body-sm text-gray-200">
              Nossa equipe estará sempre pronta para te atender para ajudar no
              que for preciso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
