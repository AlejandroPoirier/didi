// @desc: utility library for menu Links

const menuLinks = {
  int: [],
  cl: [
    {
      text: "DiDi Pasajero",
      url: "/cl/pasajero/",
      dropMenu: null,
    },
    {
      text: "DiDi Conductor",
      url: "/cl/driver/",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "/cl/driver/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/cldriverhero",
        },
        {
          text: "Club DiDiMás+",
          url: "/cl/didimas/",
        },
        {
          text: "Ciudades Operativas",
          url: "/cl/ciudades/",
        },
      ],
    },
    {
      text: "DiDi Taxi",
      url: "/cl/taxi/",
      dropMenu: null,
    },
    {
      text: "DiDi Food",
      url: "/cl/food/",
      dropMenu: [
        {
          text: "Tienda",
          url: "/cl/food/store/",
        },
        {
          text: "Socio Repartidor",
          url: "/cl/food/delivery/",
        },
        {
          text: "Acerca",
          url: "/cl/food/about/",
        },
      ],
    },
    {
      text: "Sobre DiDi",
      url: "/cl/sobre-didi/",
      dropMenu: [
        {
          text: "Seguridad",
          url: "/cl/seguridad/",
        },
        {
          text: "Centro de Ayuda",
          url: "/cl/centro-de-ayuda/",
        },
      ],
    },
    {
      text: "Contenido",
      url: "#",
      dropMenu: [
        {
          text: "Guías",
          url: "/cl/guias/",
        },
        {
          text: "Artículos",
          url: "/cl/articulos/",
        },
      ],
    },
  ],
  ar: [
    {
      text: "DiDi Pasajero",
      url: "/ar/pasajero/",
      dropMenu: null,
    },
    {
      text: "DiDi Conductor",
      url: "/ar/driver/",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "/ar/driver/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/ardriverhero",
        },
        {
          text: "Ciudades Operativas",
          url: "/ar/ciudades/",
        },
      ],
    },
    {
      text: "DiDi Taxi",
      url: "/ar/taxi/",
      dropMenu: null,
    },
    {
      text: "Sobre DiDi",
      url: "/ar/sobre-didi/",
      dropMenu: [
        {
          text: "Seguridad",
          url: "/ar/seguridad/",
        },
        {
          text: "Centro de Ayuda",
          url: "/ar/centro-de-ayuda/",
        },
      ],
    },
    {
      text: "Contenido",
      url: "#",
      dropMenu: [
        {
          text: "Artículos",
          url: "/ar/articulos/",
        },
      ],
    },
  ],
  pe: [
    {
      text: "DiDi Pasajero",
      url: "/pe/pasajero/",
      dropMenu: null,
    },
    {
      text: "DiDi Conductor",
      url: "/pe/driver/",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "/pe/driver/",
        },
        {
          text: "Regístrate Online",
          url: "https://ssa-rides-driver.onelink.me/mbwy/ardriverhero",
        },
        {
          text: "Ciudades Operativas",
          url: "/pe/ciudades/",
        },
      ],
    },

    {
      text: "Sobre DiDi",
      url: "/pe/sobre-didi/",
      dropMenu: [
        {
          text: "Seguridad",
          url: "/pe/seguridad/",
        },
        {
          text: "Centro de Ayuda",
          url: "/pe/centro-de-ayuda/",
        },
      ],
    },
    {
      text: "Contenido",
      url: "#",
      dropMenu: [
        {
          text: "Artículos",
          url: "/pe/articulos/",
        },
      ],
    },
  ],
  co: [
    {
      text: "DiDi Pasajero",
      url: "/co/pasajero/",
      dropMenu: null,
    },
    {
      text: "DiDi Conductor",
      url: "/co/driver/",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "/co/driver/",
        },
        {
          text: "Regístrate Online",
          url: "https://page.didiglobal.com/driver-page/register/index.html",
        },
      ],
    },
  ],
  au: [
    {
      text: "DiDi Rider",
      url: "/au/rider/",
      dropMenu: null,
    },
    {
      text: "DiDi Driver",
      url: "/au/driver/",
      dropMenu: [
        {
          text: "Driver",
          url: "/au/driver/",
        },
        {
          text: "Sign Up",
          url: "https://anz-rides-driver.onelink.me/ixFb/ukdriverhero",
        },
        {
          text: "DiDi Advance",
          url: "/au/didi-advance/",
        },
      ],
    },
    {
      text: "DiDi Delivery",
      url: "/au/delivery/",
      dropMenu: [
        {
          text: "Personal",
          url: "/au/delivery/personal/",
        },
        {
          text: "Business",
          url: "/au/delivery/business/",
        },
      ],
    },
    {
      text: "DiDi Safety",
      url: "/au/delivery/",
    },
  ],
  pa: [
    {
      text: "DiDi Pasajero",
      url: "http://chile.didiglobal.com/pasajero",
      dropMenu: null,
    },
    {
      text: "DiDi Conductor",
      url: "http://chile.didiglobal.com/driver",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "https://chile.didiglobal.com/driver/",
        },
        {
          text: "Santiago",
          url: "https://chile.didiglobal.com/driver/santiago",
        },
        {
          text: "Regístrate Online",
          url: "https://page.didiglobal.com/driver-page/register/index.html",
        },
      ],
    },
  ],
  cr: [
    {
      text: "DiDi Pasajero",
      url: "http://chile.didiglobal.com/pasajero",
      dropMenu: null,
    },
    {
      text: "DiDi Conductor",
      url: "http://chile.didiglobal.com/driver",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "https://chile.didiglobal.com/driver/",
        },
        {
          text: "Santiago",
          url: "https://chile.didiglobal.com/driver/santiago",
        },
        {
          text: "Regístrate Online",
          url: "https://page.didiglobal.com/driver-page/register/index.html",
        },
      ],
    },
  ],
  rd: [
    {
      text: "DiDi Pasajero",
      url: "http://chile.didiglobal.com/pasajero",
      dropMenu: null,
    },
    {
      text: "DiDi Conductor",
      url: "http://chile.didiglobal.com/driver",
      dropMenu: [
        {
          text: "Socio Conductor",
          url: "https://chile.didiglobal.com/driver/",
        },
        {
          text: "Santiago",
          url: "https://chile.didiglobal.com/driver/santiago",
        },
        {
          text: "Regístrate Online",
          url: "https://page.didiglobal.com/driver-page/register/index.html",
        },
      ],
    },
  ],
  mx: [
    {
      text: "Home",
      url: "http://mexico.didiglobal.com/",
      dropMenu: null,
    },
    {
      text: "DiDi Conductor",
      url: "https://mexico.didiglobal.com/conductor/",
      dropMenu: [
        {
          text: "Requisitos para conducir o convertirse en socio",
          url: "https://mexico.didiglobal.com/requisitos-para-conducir-o-convertirse-en-socio/",
        },
        {
          text: "Ganancias DiDi",
          url: "https://mexico.didiglobal.com/conductor/calcula-tus-ganancias",
        },
        {
          text: "Regístrate Online",
          url: "https://page.didiglobal.com/driver-page/register/index.html",
        },
      ],
    },
    {
      text: "Pasajeros",
      url: "https://mexico.didiglobal.com/pasajeros/",
      dropMenu: null,
    },
    {
      text: "DiDi Fleet",
      url: "https://mexico.didiglobal.com/didi-fleet/",
      dropMenu: null,
    },
    {
      text: "Seguridad",
      url: "https://mexico.didiglobal.com/seguridad-didi/",
      dropMenu: null,
    },
    {
      text: "Centro de Ayuda",
      url: "https://mexico.didiglobal.com/centro-de-ayuda/",
      dropMenu: null,
    },
    {
      text: "Nosotros",
      url: "https://mexico.didiglobal.com/about-us/",
      dropMenu: null,
    },
  ],
};

const getMenuLinks = (country) => {
  return menuLinks[country] || [];
};

module.exports = { getMenuLinks };
