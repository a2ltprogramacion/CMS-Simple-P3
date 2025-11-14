// src/content/config.ts
// Versión: 1.1 | Fix: TypeScript Inference
import { z, defineCollection } from 'astro:content';

// 1. Colección Productos
const productosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

// 2. Colección Páginas
const paginasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // SEO
    title: z.string().optional(),
    description: z.string().optional(),
    h1: z.string().optional(),
    header_image: z.string().optional(), // Imagen de cabecera para paginas (ej. proyectos)
    h2_reciente: z.string().optional(),
    h2_archivo: z.string().optional(),

    // Secciones (Sin .default({}) para evitar bloqueo de tipos)
    template: z.string().optional(),
    
    hero: z.object({
      show_section: z.boolean().optional(), 
      title: z.string().optional(),
      description: z.string().optional(), 
      cta_text: z.string().optional(),
      cta_url: z.string().optional(),
    }).optional(),

    nosotros: z.object({
      show_section: z.boolean().optional(), 
      title: z.string().optional(), 
      subtitle: z.string().optional(), 
      description: z.string().optional(), 
      servicios_lista: z.string().optional(), 
      lista_destacados_productos: z.array(z.string()).optional(), 
    }).optional(),

    proyectos: z.object({ 
      show_section: z.boolean().optional(),
      title: z.string().optional(),
      subtitle: z.string().optional(),
      lista_destacados: z.array(z.string()).optional(),
    }).optional(),

    clientes: z.object({
      show_section: z.boolean().optional(), 
      title: z.string().optional(),
      lista_destacados: z.array(z.string()).optional(),
      show_scroller: z.boolean().optional(),
    }).optional(),

    testimonios: z.object({ 
      show_section: z.boolean().optional(),
      title: z.string().optional(),
      lista: z.array(z.object({
        quote: z.string(),
        author: z.string().optional(),
        google_review_embed: z.string().optional(),
      })).optional(),
    }).optional(),
  }),
});

// 3. Colección Proyectos (Añadido slug a data por si acaso, aunque usaremos project.slug)
const proyectosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    client_name: z.string(),
    titulo: z.string(), 
    services_list: z.array(z.string()).optional(),
    image: z.string().optional(), 
    date: z.date().optional(),
    summary: z.string().optional(), 
    project_details: z.string().optional(),    
    gallery: z.array(z.object({ image_path: z.string() })).optional(),
    // Opcional: si en el CMS guardas el slug explícitamente en el frontmatter
    slug: z.string().optional(),
  }),
});

// 4. Colección Clientes
const clientesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    logo: z.string(),
    url: z.string().url().optional(),
  }),
});

// 5. Ajustes
const ajustesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    brand_name: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    cta_textos: z.object({
      ver_proyecto: z.string().optional(),
      leer_mas: z.string().optional(),
      contactar_producto: z.string().optional(),
    }).optional(),
  }),
});

// 6. Contacto
const contactoCollection = defineCollection({
  type: 'data',
  schema: z.object({
    whatsapp: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
    address: z.string().optional(),
    contact_heading: z.string().optional(),
    contact_subheading: z.string().optional(),
    whatsapp_message: z.string().optional(),
    show_contact_section: z.boolean().optional(),
    logo_footer: z.string().optional(),
    footer_description: z.string().optional(),
    social_media: z.object({
      facebook: z.string().url().optional(),
      instagram: z.string().url().optional(),
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
      youtube: z.string().optional(),
    }).optional(),
  }),
});

// 7. Footer Nav
const footerNavigationCollection = defineCollection({
  type: 'data',
  schema: z.object({
    columns: z.array(z.object({
      title: z.string(),
      links: z.array(z.object({
        text: z.string(),
        url: z.string(),
      })),
    })).optional(),
  }),
});

// 8. Legal
const legalCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  'productos': productosCollection,
  'pages': paginasCollection,
  'proyectos': proyectosCollection,
  'clientes': clientesCollection,
  'ajustes': ajustesCollection,
  'informacion-de-contacto': contactoCollection,
  'footer_navigation': footerNavigationCollection, 
  'legal': legalCollection,
};