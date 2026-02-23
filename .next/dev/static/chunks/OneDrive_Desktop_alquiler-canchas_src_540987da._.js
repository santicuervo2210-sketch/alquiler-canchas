(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/alquiler-canchas/src/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/alquiler-canchas/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/alquiler-canchas/node_modules/@supabase/ssr/dist/index.mjs [app-client] (ecmascript) <locals>");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://aegccjwnfpvrioijledw.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_4UBbVDuXURqbj8Qtf3r36w_AsIhmva_"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GestionCanchas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/alquiler-canchas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/alquiler-canchas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/alquiler-canchas/src/lib/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/alquiler-canchas/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function GestionCanchas() {
    _s();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [canchas, setCanchas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Estado para la nueva cancha
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nombre: '',
        tipo: 'futbol_5',
        precio_hora: '',
        activa: true
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GestionCanchas.useEffect": ()=>{
            fetchCanchas();
        }
    }["GestionCanchas.useEffect"], []);
    const fetchCanchas = async ()=>{
        setLoading(true);
        const { data: complejos } = await supabase.from('complejos').select('id').limit(1);
        if (complejos?.[0]) {
            const { data } = await supabase.from('canchas').select('*').eq('complejo_id', complejos[0].id).order('created_at', {
                ascending: true
            });
            setCanchas(data || []);
        }
        setLoading(false);
    };
    const handleToggleActiva = async (id, estadoActual)=>{
        await supabase.from('canchas').update({
            activa: !estadoActual
        }).eq('id', id);
        fetchCanchas();
    };
    const handleEliminar = async (id)=>{
        if (confirm('¿Estás seguro de eliminar esta cancha? No se puede deshacer.')) {
            await supabase.from('canchas').delete().eq('id', id);
            fetchCanchas();
        }
    };
    const handleCrearCancha = async (e)=>{
        e.preventDefault();
        const { data: complejos } = await supabase.from('complejos').select('id').limit(1);
        if (!complejos?.[0]) return;
        const { error } = await supabase.from('canchas').insert({
            ...form,
            complejo_id: complejos[0].id,
            precio_hora: parseInt(form.precio_hora)
        });
        if (!error) {
            setShowForm(false);
            setForm({
                nombre: '',
                tipo: 'futbol_5',
                precio_hora: '',
                activa: true
            });
            fetchCanchas();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen relative p-4 md:p-10 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-green-900/80 to-black/90 z-10"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://images.unsplash.com/photo-1551673400-38fdadad5c3d?q=80&w=2000",
                        className: "w-full h-full object-cover",
                        alt: "pasto"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-5xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row justify-between items-center mb-10 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push('/dashboard'),
                                className: "text-white/70 hover:text-white transition-all text-sm font-bold uppercase tracking-widest flex items-center gap-2",
                                children: "← Volver al Panel"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-black text-white italic tracking-tighter uppercase",
                                children: [
                                    "Mis ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-400",
                                        children: "Canchas"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowForm(!showForm),
                                className: "bg-green-500 hover:bg-green-400 text-black font-black px-6 py-3 rounded-full transition-all shadow-lg shadow-green-500/20 active:scale-95",
                                children: showForm ? 'CERRAR' : '+ AGREGAR CANCHA'
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-[32px] p-8 mb-10 shadow-2xl animate-in zoom-in-95 duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-black text-gray-800 mb-6 italic uppercase",
                                children: "Nueva Cancha"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleCrearCancha,
                                className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Nombre (ej: Cancha 1)",
                                        required: true,
                                        className: "bg-gray-100 p-4 rounded-2xl outline-none focus:ring-2 ring-green-500 font-bold",
                                        value: form.nombre,
                                        onChange: (e)=>setForm({
                                                ...form,
                                                nombre: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "bg-gray-100 p-4 rounded-2xl outline-none focus:ring-2 ring-green-500 font-bold",
                                        value: form.tipo,
                                        onChange: (e)=>setForm({
                                                ...form,
                                                tipo: e.target.value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "futbol_5",
                                                children: "⚽ Fútbol 5"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "paddle",
                                                children: "🎾 Pádel"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        placeholder: "Precio por hora",
                                        required: true,
                                        className: "bg-gray-100 p-4 rounded-2xl outline-none focus:ring-2 ring-green-500 font-bold",
                                        value: form.precio_hora,
                                        onChange: (e)=>setForm({
                                                ...form,
                                                precio_hora: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-black text-white font-black rounded-2xl hover:bg-gray-800 transition-all",
                                        children: "GUARDAR"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: canchas.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `bg-white/10 backdrop-blur-md border ${c.activa ? 'border-white/20' : 'border-red-500/50'} rounded-[32px] p-6 flex flex-col justify-between transition-all hover:bg-white/15`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-black bg-green-500 text-black px-2 py-1 rounded-md uppercase mb-2 block w-fit",
                                                    children: c.tipo.replace('_', ' ')
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-black text-white italic uppercase tracking-tighter",
                                                    children: c.nombre
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-green-400 font-bold text-xl mt-1",
                                                    children: [
                                                        "$",
                                                        c.precio_hora,
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-white/50 uppercase",
                                                            children: "/ hora"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 89
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleToggleActiva(c.id, c.activa),
                                                    className: `p-3 rounded-xl font-bold text-xs transition-all ${c.activa ? 'bg-green-500 text-black' : 'bg-gray-600 text-white'}`,
                                                    children: c.activa ? 'ACTIVA' : 'PAUSADA'
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleEliminar(c.id),
                                                    className: "bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-white p-3 rounded-xl transition-all",
                                                    children: "🗑️"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this)
                            }, c.id, false, {
                                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    canchas.length === 0 && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-20 bg-white/5 rounded-[40px] border border-dashed border-white/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/40 font-bold uppercase tracking-widest",
                            children: "No tenés canchas creadas todavía"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(GestionCanchas, "DKaEZjGaIS7LxXVnuJ2l9POJwTI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = GestionCanchas;
var _c;
__turbopack_context__.k.register(_c, "GestionCanchas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_alquiler-canchas_src_540987da._.js.map