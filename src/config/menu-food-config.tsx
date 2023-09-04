// @desc: utility library for food menu links

export interface SingleDropMenuItem {
  text?: string;
  url?: string;
}

export interface SingleMenuItemFood {
  text: string;
  url: string;
  dropMenu?: SingleDropMenuItem[];
  icon?: string;
}

interface AllMenuInterface {
  [countryCode: string]: SingleMenuItemFood[];
}

const menuLinksFood: AllMenuInterface = {
  mx: [
    {
      text: "Restaurantes",
      url: "/mx/food/restaurantes/",
      icon: "menu-restaurant",
      dropMenu: [
        {
          text: "Registra tu Restaurante",
          url: "https://page.didiglobal.com/public-biz/pc-login/2.0.0/index.html?source=70001&appid=50002&role=13&country_id=484&lang=es-MX&redirectUrl=%2F%2Fcrm.didi-food.com%2Fcrm%2FselfEntry%2Fpassport%2FsetCookie%3FjumpPage%3Dhttps%253A%252F%252Fwww.didi-food.com%252Fes-MX%252Fstore%252Fself-onboarding%252Flist#",
        },
        {
          text: "Impuestos",
          url: "/mx/food/restaurantes/impuestos/",
        },
        {
          text: "Guías",
          url: "/mx/food/restaurantes/guias-educacionales/",
        },
        {
          text: "DiDi Food FAQ",
          url: "/mx/food/restaurantes/preguntas-frecuentes/",
        },
        {
          text: "Kit Digital",
          url: "/mx/food/restaurantes/kit-digital/",
        },
        {
          text: "Promociones y Campañas",
          url: "/mx/food/restaurantes/promociones-y-campanas/",
        },
        {
          text: "Descarga",
          url: "/mx/food/restaurantes/descarga/",
        },
      ],
    },
    {
      text: "Socio repartidor",
      url: "/mx/food/repartidores/",
      icon: "menu-delivery",
      dropMenu: [
        {
          text: "Club Repartidores",
          url: "/mx/food/repartidores/club-repartidores/",
        },
        {
          text: "Ganancias",
          url: "/mx/food/repartidores/ganancias/",
        },
        {
          text: "Registro",
          url: "/mx/food/repartidores/registro/",
        },
        {
          text: "Rendimiento",
          url: "/mx/food/repartidores/rendimiento/",
        },
        {
          text: "Seguridad",
          url: "/mx/food/repartidores/seguridad/",
        },
        {
          text: "Guías",
          url: "/mx/food/repartidores/guias/",
        },
      ],
    },
    {
      text: "Acerca",
      url: "/mx/food/acerca-didi-food/",
      icon: "menu-help",
      dropMenu: [
        {
          text: "Preguntas Frecuentes",
          url: "/mx/food/preguntas-frecuentes/",
        },
      ],
    },
    {
      text: "Contacto",
      url: "/mx/food/contacto/",
      icon: "menu-contact",
    },
    {
      text: "Blog",
      url: "/mx/food/blog/",
      icon: "menu-blog",
    },
  ],

  cr: [
    {
      text: "Restaurantes",
      url: "/cr/food/restaurantes/",
      icon: "menu-restaurant",
      dropMenu: [
        {
          text: "Registrá tu Restaurante",
          url: "https://www.didi-food.com/es-CR/food/address/",
        },
        {
          text: "Guías",
          url: "/cr/food/restaurantes/guias-educacionales/",
        },
        {
          text: "DiDi Food FAQ",
          url: "/cr/food/restaurantes/preguntas-frecuentes/",
        },
        {
          text: "Kit Digital",
          url: "/cr/food/restaurantes/kit-digital/",
        },
        {
          text: "Promociones y Campañas",
          url: "/cr/food/restaurantes/promociones-y-campanas/",
        },
        {
          text: "Descarga",
          url: "/cr/food/restaurantes/descarga/",
        },
      ],
    },
    {
      text: "Socio repartidor",
      url: "/cr/food/repartidores/",
      icon: "menu-delivery",
      dropMenu: [
        {
          text: "Club Repartidores",
          url: "/cr/food/repartidores/club-repartidores/",
        },
        {
          text: "Ganancias",
          url: "/cr/food/repartidores/ganancias/",
        },
        {
          text: "Registro",
          url: "/cr/food/repartidores/registro/",
        },
        {
          text: "Rendimiento",
          url: "/cr/food/repartidores/rendimiento/",
        },
        {
          text: "Seguridad",
          url: "/cr/food/repartidores/seguridad/",
        },
        {
          text: "Guías",
          url: "/cr/food/repartidores/guias/",
        },
      ],
    },
    {
      text: "Acerca",
      url: "/cr/food/acerca-didi-food/",
      icon: "menu-help",
    },
    {
      text: "Contacto",
      url: "/cr/food/contacto/",
      icon: "menu-contact",
    },
    {
      text: "Blog",
      url: "/cr/food/blog/",
      icon: "menu-blog",
    },
  ],
  co: [
    {
      text: "Restaurantes",
      url: "/co/food/restaurantes/",
      icon: "menu-restaurant",
      dropMenu: [
        {
          text: "Registra tu Restaurante",
          url: "https://www.didi-food.com/es-CO/store",
        },
        {
          text: "Guías",
          url: "/co/food/restaurantes/guias-educacionales/",
        },
        {
          text: "DiDi Food FAQs",
          url: "/co/food/restaurantes/preguntas-frecuentes/",
        },
        {
          text: "Kit Digital",
          url: "/co/food/restaurantes/kit-digital/",
        },
        {
          text: "Promociones y Campañas",
          url: "/co/food/restaurantes/promociones-y-campanas/",
        },
        {
          text: "Descarga",
          url: "/co/food/restaurantes/descarga/",
        },
      ],
    },
    {
      text: "Socio repartidor",
      url: "/co/food/repartidores/",
      icon: "menu-delivery",
      dropMenu: [
        {
          text: "Club Repartidores",
          url: "/co/food/repartidores/club-repartidores/",
        },
        {
          text: "Ganancias",
          url: "/co/food/repartidores/ganancias/",
        },
        {
          text: "Registro",
          url: "/co/food/repartidores/registro/",
        },
        {
          text: "Rendimiento",
          url: "/co/food/repartidores/rendimiento/",
        },
        {
          text: "Seguridad",
          url: "/co/food/repartidores/seguridad/",
        },
        {
          text: "Guías",
          url: "/co/food/repartidores/guias/",
        },
      ],
    },
    {
      text: "Acerca",
      url: "/co/food/acerca-didi-food/",
      icon: "menu-help",
    },
    {
      text: "Contacto",
      url: "/co/food/contacto/",
      icon: "menu-contact",
    },
    {
      text: "Blog",
      url: "/co/food/blog",
      icon: "menu-blog",
    },
  ],
  pe: [
    {
      text: "Restaurantes",
      url: "/pe/food/restaurantes/",
      icon: "menu-restaurant",
      dropMenu: [
        {
          text: "Kit Digital",
          url: "/pe/food/restaurantes/kit-digital/",
        },
      ],
    },
    {
      text: "Socio repartidor",
      url: "/pe/food/repartidores/",
      icon: "menu-delivery",
      dropMenu: [
        {
          text: "Club Repartidores",
          url: "/pe/food/repartidores/club-repartidores/",
        },
        {
          text: "Ganancias",
          url: "/pe/food/repartidores/ganancias/",
        },
        {
          text: "Registro",
          url: "/pe/food/repartidores/registro/",
        },
        {
          text: "Rendimiento",
          url: "/pe/food/repartidores/rendimiento/",
        },
        {
          text: "Seguridad",
          url: "/pe/food/repartidores/seguridad/",
        },
      ],
    },
    {
      text: "Acerca",
      url: "/pe/food/acerca-didi-food/",
      icon: "menu-help",
    },
    {
      text: "Contacto",
      url: "/pe/food/contacto/",
      icon: "menu-contact",
    },
    {
      text: "Blog",
      url: "/pe/food/blog",
      icon: "menu-blog",
    },
  ],
  mxen: [
    {
      text: "Store",
      url: "/mx/food/en/restaurants/",
      icon: "menu-restaurant",
    },
    {
      text: "Delivery",
      url: "/mx/food/en/couriers/",
      icon: "menu-delivery",
    },
    {
      text: "About",
      url: "/mx/food/en/about/",
      icon: "menu-help",
    },
    {
      text: "Contact",
      url: "/mx/food/en/contact/",
      icon: "menu-contact",
    },
  ],
};

const getMenuLinksFood = (countryCode: string) => {
  return menuLinksFood[countryCode] || [];
};

export { getMenuLinksFood };
