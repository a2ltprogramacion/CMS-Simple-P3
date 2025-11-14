# Plantilla Comercial "Authority" V1.7 (Astro + Decap CMS)

Esta no es una plantilla de blog. Es un **Motor de Credibilidad** de nivel de agencia, construido con Astro, TailwindCSS y Decap CMS (antes Netlify CMS). Ha sido diseñado desde cero para vender servicios de alto valor donde la confianza, la experiencia y la prueba social (Portafolio y Clientes) son cruciales.

La plantilla V1.7 implementa una estética "Tech/Futurista" (Dark Mode, Glassmorphism y una paleta de colores Cián + Índigo) para posicionar al propietario como una autoridad innovadora en su sector.

![Vista Previa de la Plantilla Authority](https://i.imgur.com/URL_DE_TU_IMAGEN.png)

---

## 1. Filosofía de Diseño: El "Motor de Credibilidad"

El objetivo de esta plantilla es **vender seguridad y experiencia**. Cada decisión de diseño e interfaz de usuario (UI/UX) respalda este objetivo:

* **Dark Mode Nativo:** Proyecta sofisticación y hace que las imágenes del portafolio resalten.
* **Glassmorphism (Efecto Cristal):** En `Nosotros` y el `Footer`, crea una sensación de profundidad y modernidad.
* **Paleta "Tech-Premium":**
    * **Cián (`#00BFFF`):** El color "Héroe". Se usa para CTAs primarios, evocando tecnología, inteligencia y confianza.
    * **Índigo (`#7F5AF0`):** El color "Soporte". Se usa para acentos secundarios, evocando sabiduría, sofisticación y estabilidad premium.
* **Arquitectura de 3 Pilares:** El flujo de la página de inicio está diseñado para llevar al usuario a través de un embudo de conversión basado en la confianza:
    1.  **Nosotros (Identidad):** ¿Quiénes somos y qué hacemos? (Fusión 60/40).
    2.  **Portafolio (Prueba):** ¿Cómo lo hemos hecho antes? (Proyecto destacado + Grid).
    3.  **Clientes (Confianza):** ¿Para quién lo hemos hecho? (Grid estático + Marquee).

## 2. Audiencia Objetivo (Market-Fit)

Esta plantilla está optimizada para profesionales y empresas que necesitan justificar un precio premium.

### ✅ Ideal Para:
* **Agencias Digitales:** (Marketing, Desarrollo Web, SEO, Publicidad).
* **Estudios Creativos:** (Branding, Diseño 3D, Producción Audiovisual).
* **Freelancers de Alto Nivel:** (Consultores Tech, Desarrolladores Senior, Diseñadores UI/UX).
* **Startups de Tecnología y SaaS (B2B):** Que necesitan proyectar innovación y seriedad.

### ❌ No Recomendada Para:
* **E-commerce Puro:** (No tiene carrito de compras).
* **Negocios Locales B2C:** (Restaurantes, peluquerías). La estética es demasiado "tech" y no busca la "calidez" que estos negocios requieren.
* **Sectores Ultra-Conservadores:** (Firmas de abogados, finanzas tradicionales).

## 3. Tech Stack

* **Framework:** [Astro](https://astro.build/) (Renderizado estático para máxima velocidad).
* **CMS:** [Decap CMS](https://decapcms.org/) (Manejo de contenido 100% basado en Git).
* **Estilos:** [TailwindCSS](https://tailwindcss.com/) (Clases de utilidad para un diseño consistente).
* **Partículas (Hero):** [TSParticles](https://particles.js.org/) (Fondo dinámico "Red de Circuitos").
* **Markdown:** `marked` (Para renderizar contenido del CMS).
* **Despliegue:** [Netlify](https://netlify.com/) (Optimizado para Git-Gateway de Decap).

## 4. 🚀 Primeros Pasos (Uso e Instalación)

Para ejecutar este proyecto localmente, **no puedes usar `npm run dev`**. Debes usar la CLI de Netlify para simular el entorno de autenticación que Decap CMS necesita.

### Prerrequisitos
1.  **Node.js:** Versión 18.x o superior.
2.  **Netlify CLI:** El cliente de línea de comandos de Netlify.
    ```sh
    npm install -g netlify-cli
    ```

### 1. Instalación
Clona el repositorio e instala las dependencias.
```sh
git clone https://github.com/a2ltprogramacion/CMS-Simple-P2.git
cd CMS-Simple-P2
npm install
```

### 2\. Desarrollo Local (Comando Esencial)

Este es el único comando que necesitas para desarrollar. Inicia un servidor local, compila Astro y activa el proxy de Decap CMS.

```sh
netlify dev
```

  * **Sitio Web:** Se abrirá en `http://localhost:8888`
  * **Acceso al CMS:** Navega a `http://localhost:8888/admin/`

### 3\. Acceso al CMS (Decap)

Al visitar `/admin/` por primera vez:

1.  Se abrirá un pop-up de "Netlify Identity".
2.  Haz clic en "Continue with Netlify".
3.  Usa tu cuenta de Netlify (la misma donde desplegarás el sitio) para autenticarte.
4.  ¡Listo\! Ahora puedes editar el contenido localmente, y los cambios se reflejarán en tus archivos `.md` y `.yml` en `src/content/`.

### 4\. Comandos Estándar de Astro

Estos comandos se usan principalmente para *verificar* la compilación, pero no para el desarrollo diario.

| Comando | Acción |
| :--- | :--- |
| `npm run build` | Compila el sitio de producción en `./dist/` |
| `npm run preview` | Previsualiza el build de producción (No incluye el CMS) |

## 5\. 🏗️ Estructura del Proyecto (Meticulosa)

Esta es la anatomía de la plantilla. Solo necesitas enfocarte en los archivos de `src/content/` y `public/admin/` para la gestión de contenido.

```text
/
├── public/
│   ├── admin/
│   │   └── config.yml  (Controla la UI del CMS. Añade/quita campos aquí)
│   └── assets/
│       └── uploads/    (Donde Decap guarda las imágenes subidas)
│
├── src/
│   ├── components/
│   │   ├── Header.astro         (Navegación principal, filtrado dinámico de enlaces)
│   │   ├── ProjectCard.astro    (Tarjeta pequeña para grids)
│   │   ├── FeaturedProject.astro(Tarjeta grande para portafolio)
│   │   └── ProductCard.astro    (Tarjeta de servicio usada en "Nosotros")
│   │
│   ├── content/
│   │   ├── (COLECCIONES DE CONTENIDO - LA "BASE DE DATOS")
│   │   ├── productos/
│   │   ├── proyectos/
│   │   ├── clientes/
│   │   ├── legal/
│   │   │
│   │   ├── (COLECCIONES DE DATOS - CONFIGURACIÓN)
│   │   ├── ajustes/
│   │   │   └── home.yml  (¡IMPORTANTE! Panel de control principal: Nombre de marca, CTAs)
│   │   ├── informacion-de-contacto/
│   │   │   └── general.yml (Teléfono, email, redes sociales, textos del footer)
│   │   ├── footer_navigation/
│   │   │   └── main.yml  (Enlaces de las columnas del footer)
│   │   │
│   │   └── config.ts     (Define el "Schema" de datos. Sincronizado con config.yml)
│   │
│   ├── layouts/
│   │   └── Layout.astro  (Plantilla maestra: incluye Header, Footer, SEO y scripts globales)
│   │
│   ├── pages/
│   │   ├── index.astro           (Página de inicio, une todas las secciones)
│   │   ├── proyectos.astro       (Página de listado del portafolio)
│   │   ├── proyectos/[slug].astro(Plantilla de detalle para un proyecto)
│   │   └── legal/[...slug].astro (Plantilla genérica para "Políticas de Privacidad", etc.)
│   │
│   └── utils/
│       └── markdown.ts   (Utilidad que convierte Markdown a HTML)
│
├── tailwind.config.mjs (Control de Diseño: Aquí se define la paleta Cián+Índigo)
└── package.json
```

## 6\. 🎨 Guía de Personalización Rápida

Para "apropiarte" de esta plantilla, sigue estos 3 pasos:

### Paso 1: Configuración Global (Branding)

  * **Archivo:** `src/content/ajustes/home.yml`
  * **Acción:** Abre este archivo (o edítalo desde el CMS en "Ajustes Globales") y cambia `brand_name` por el nombre de tu cliente.

### Paso 2: Información de Contacto

  * **Archivo:** `src/content/informacion-de-contacto/general.yml`
  * **Acción:** Rellena tu WhatsApp, Email y Redes Sociales. Los que dejes vacíos, no se mostrarán.

### Paso 3: Paleta de Colores (Opcional)

  * **Archivo:** `tailwind.config.mjs`
  * **Acción:** Si el cliente odia el Cián o el Índigo, puedes cambiar los códigos hexadecimales de `accent` y `accent-secondary` para modificar el tema de todo el sitio en segundos.

### Paso 4: Añade tu Contenido

  * **Acción:** Inicia `netlify dev`, ve a `http://localhost:8888/admin/` y comienza a borrar los demos y añadir los Proyectos, Productos y Clientes reales.

## 7\. 🚀 Despliegue en Netlify

El despliegue es automático:

1.  Crea un nuevo sitio en Netlify desde tu repositorio de GitHub.
2.  **Configuración de Build:**
      * **Comando de Build:** `npm run build`
      * **Directorio de Publicación:** `dist`
3.  **Habilitar "Identity":**
      * Ve a la pestaña `Site configuration` \> `Identity`.
      * Haz clic en `Enable Identity`.
4.  **Habilitar "Git Gateway":**
      * Bajo `Identity` \> `Services` \> `Git Gateway`, haz clic en `Enable Git Gateway`.
      * Esto es lo que permite a Decap CMS escribir de vuelta en tu repositorio.
5.  ¡Listo\! Tu sitio está en vivo y el CMS (`tu-sitio.netlify.app/admin/`) está operativo.

-----
