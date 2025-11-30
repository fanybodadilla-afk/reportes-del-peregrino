import React from 'react';
import { ReportCategory, Report, Contact } from './types';

export const CATEGORIES: ReportCategory[] = [
  ReportCategory.INCIDENT,
  ReportCategory.SHELTER_FULL,
  ReportCategory.SHELTER_EMPTY,
  ReportCategory.FOOD_FULL,
  ReportCategory.FOOD_EMPTY,
  ReportCategory.REST_AREA,
  ReportCategory.HYDRATION,
  ReportCategory.TOURIST_SITE,
  ReportCategory.ALT_ROUTE,
  ReportCategory.OTHER,
];

export const CATEGORY_CLASS_MAP: Record<ReportCategory, string> = {
    [ReportCategory.INCIDENT]: 'bg-red-100 text-red-800',
    [ReportCategory.SHELTER_FULL]: 'bg-amber-100 text-amber-800',
    [ReportCategory.SHELTER_EMPTY]: 'bg-green-100 text-green-800',
    [ReportCategory.FOOD_FULL]: 'bg-orange-100 text-orange-800',
    [ReportCategory.FOOD_EMPTY]: 'bg-emerald-100 text-emerald-800',
    [ReportCategory.REST_AREA]: 'bg-sky-100 text-sky-800',
    [ReportCategory.HYDRATION]: 'bg-blue-100 text-blue-800',
    [ReportCategory.TOURIST_SITE]: 'bg-purple-100 text-purple-800',
    [ReportCategory.ALT_ROUTE]: 'bg-indigo-100 text-indigo-800',
    [ReportCategory.OTHER]: 'bg-slate-100 text-slate-800',
};

// FIX: Replaced JSX with React.createElement to be compatible with a .ts file.
export const CATEGORY_ICONS: Record<ReportCategory, React.FC<React.SVGProps<SVGSVGElement>>> = {
  [ReportCategory.INCIDENT]: (props) => (
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" })
    )
  ),
  [ReportCategory.SHELTER_FULL]: (props) => (
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6m-6 5.25h6m-6 5.25h6M5.25 6h.008v.008H5.25V6zm.75 4.5h.008v.008H6v-4.5zm-.75 4.5h.008v.008H5.25v-4.5zM18 6h.008v.008H18V6zm.75 4.5h.008v.008H18.75v-4.5zm-.75 4.5h.008v.008H18v-4.5z" })
    )
  ),
  [ReportCategory.SHELTER_EMPTY]: (props) => (
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m-3-1l-3-1m3 1v5.5m-13.5-9.455l4.5-1.636M6.75 3l1.5.545m0 6.205l3 1m-3-1l-3-1m3 1V21" })
    )
  ),
  [ReportCategory.FOOD_FULL]: (props) => (
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.117 1.243H4.252c-.654 0-1.187-.585-1.117-1.243l1.263-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.117 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" }),
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12.75h6" })
    )
  ),
  [ReportCategory.FOOD_EMPTY]: (props) => (
     React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.117 1.243H4.252c-.654 0-1.187-.585-1.117-1.243l1.263-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.117 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" })
    )
  ),
  [ReportCategory.REST_AREA]: (props) => (
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" })
    )
  ),
  [ReportCategory.HYDRATION]: (props) => (
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c1.356 0 2.707-.134 4.012-.401M12 21c-1.356 0-2.707-.134-4.012-.401m8.024 0a9.005 9.005 0 00-4.012-7.873M8.012 14.252a9.005 9.005 0 014.012-7.873m0 7.873a9.005 9.005 0 00-4.012 0M12 12v9m-4.012-9a9.005 9.005 0 014.012-7.873m0 7.873a9.005 9.005 0 01-4.012 0" }),
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3v.01" })
    )
  ),
  [ReportCategory.TOURIST_SITE]: (props) => (
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" }),
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" })
    )
  ),
  [ReportCategory.ALT_ROUTE]: (props) => (
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" })
    )
  ),
  [ReportCategory.OTHER]: (props) => (
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
      React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" })
    )
  ),
};


export const INITIAL_REPORTS: Report[] = [
  {
    id: 1,
    category: ReportCategory.HYDRATION,
    comment: '¡Punto de hidratación con agua fresca y fruta en el km 15! Muy amables.',
    photo: 'https://picsum.photos/seed/peregrino1/600/400',
    timestamp: new Date(Date.now() - 3600 * 1000 * 1), // 1 hour ago
  },
  {
    id: 2,
    category: ReportCategory.SHELTER_EMPTY,
    comment: 'El albergue de "La Estancia" todavía tiene mucho espacio disponible. ¡Anímense!',
    photo: 'https://picsum.photos/seed/peregrino2/600/400',
    timestamp: new Date(Date.now() - 3600 * 1000 * 3), // 3 hours ago
  },
  {
    id: 3,
    category: ReportCategory.INCIDENT,
    comment: 'Cuidado en el tramo de "La Herradura", hay una parte del camino un poco resbaladiza por la lluvia de anoche.',
    photo: 'https://picsum.photos/seed/peregrino3/600/400',
    timestamp: new Date(Date.now() - 3600 * 1000 * 5), // 5 hours ago
  }
];

export const CONTACTS: Contact[] = [
  {
    name: 'Protección Civil Jalisco',
    phone: '33-3675-3060',
    description: 'Emergencias generales y asistencia en la ruta.'
  },
  {
    name: 'Cruz Roja Ameca',
    phone: '375-758-0329',
    description: 'Atención médica y emergencias en la zona de Ameca.'
  },
  {
    name: 'Cruz Roja Talpa de Allende',
    phone: '388-385-0222',
    description: 'Atención médica y emergencias en la zona de Talpa.'
  },
  {
    name: 'Policía Municipal Ameca',
    phone: '375-758-0245',
    description: 'Seguridad y reportes de incidentes.'
  },
  {
    name: 'Policía Municipal Talpa de Allende',
    phone: '388-385-0123',
    description: 'Seguridad y reportes de incidentes.'
  },
  {
    name: 'Información Turística Talpa',
    phone: '388-385-0014',
    description: 'Información sobre la ruta, albergues y servicios.'
  }
];