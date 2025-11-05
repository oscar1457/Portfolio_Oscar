# Mi Portfolio Personal con Next.js, Firebase y Genkit

Este proyecto es un portfolio personal dinámico creado con Next.js, Framer Motion para las animaciones, ShadCN para los componentes de UI, y Firebase para la base de datos y la autenticación.

## Requisitos Previos

Antes de empezar, asegúrate de tener instalado lo siguiente en tu sistema:

1.  **Node.js:** Se recomienda la última versión LTS. Puedes descargarlo desde [nodejs.org](https://nodejs.org).
2.  **npm:** Viene incluido con Node.js.

## Pasos para la Configuración Local

Sigue estos pasos para levantar el proyecto en tu máquina:

1.  **Crea una carpeta para el proyecto y ábrela en VS Code.**
    
2.  **Recrea la estructura de archivos y carpetas** como se muestra en el esquema de abajo.
    
3.  **Copia y pega el contenido** de cada archivo que te proporcionaré. Pide el contenido de cada archivo por su nombre.
    
4.  **Instala las dependencias:** Una vez que tengas todos los archivos, abre una terminal en la raíz del proyecto y ejecuta:
    ```bash
    npm install
    ```
    Este comando leerá el archivo `package.json` e instalará todas las librerías necesarias.
    
5.  **Inicia el servidor de desarrollo:** Una vez que la instalación se complete, ejecuta:
    ```bash
    npm run dev
    ```
    Esto iniciará la aplicación en modo de desarrollo.
    
6.  **Abre la aplicación:** Abre tu navegador y ve a `http://localhost:9002` para ver tu portfolio en acción.

## Estructura del Proyecto

Asegúrate de tener todos los siguientes archivos y carpetas en tu proyecto. Pídele al asistente el contenido de cada uno para copiarlo.

```
.
├── apphosting.yaml
├── components.json
├── docs
│   └── backend.json
├── firestore.rules
├── next.config.ts
├── package.json
├── public
│   └── CV-Oscar-Quintana.pdf  <-- (Recuerda añadir tu CV aquí)
├── README.md
├── src
│   ├── ai
│   │   ├── dev.ts
│   │   └── genkit.ts
│   ├── app
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── FirebaseErrorListener.tsx
│   │   ├── about.tsx
│   │   ├── client-layout.tsx
│   │   ├── contact.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── preloader.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       └── tooltip.tsx
│   ├── firebase
│   │   ├── client-provider.tsx
│   │   ├── config.ts
│   │   ├── error-emitter.ts
│   │   ├── errors.ts
│   │   ├── firestore
│   │   │   ├── use-collection.tsx
│   │   │   └── use-doc.tsx
│   │   ├── index.ts
│   │   ├── non-blocking-login.tsx
│   │   ├── non-blocking-updates.tsx
│   │   └── provider.tsx
│   ├── hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   └── lib
│       ├── placeholder-images.json
│       ├── placeholder-images.ts
│       └── utils.ts
├── tailwind.config.ts
└── tsconfig.json
```

Ahora, ¡adelante! Dime qué archivo quieres copiar primero y te daré su contenido. Te recomiendo empezar por `package.json`.
