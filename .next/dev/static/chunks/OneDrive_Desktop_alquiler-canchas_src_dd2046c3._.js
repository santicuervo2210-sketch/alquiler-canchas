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
"[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReservasPublicaPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/alquiler-canchas/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/alquiler-canchas/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/alquiler-canchas/src/lib/supabase/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ReservasPublicaPage() {
    _s();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    // --- ESTADOS ---
    const [complejo, setComplejo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [canchas, setCanchas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [canchaSel, setCanchaSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fecha, setFecha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [slots, setSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [slotSel, setSlotSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paso, setPaso] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reservaOk, setReservaOk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Datos del cliente
    const [nombre, setNombre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [telefono, setTelefono] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // --- 1. CARGA INICIAL (Complejo y Canchas) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReservasPublicaPage.useEffect": ()=>{
            const cargarDatosIniciales = {
                "ReservasPublicaPage.useEffect.cargarDatosIniciales": async ()=>{
                    // Traemos el primer complejo disponible
                    const { data: complejosData } = await supabase.from('complejos').select('*').limit(1);
                    if (complejosData && complejosData.length > 0) {
                        const miComplejo = complejosData[0];
                        setComplejo(miComplejo);
                        // Traemos las canchas de ese complejo
                        const { data: canchasData } = await supabase.from('canchas').select('*').eq('complejo_id', miComplejo.id).eq('activa', true);
                        setCanchas(canchasData || []);
                    }
                }
            }["ReservasPublicaPage.useEffect.cargarDatosIniciales"];
            cargarDatosIniciales();
        }
    }["ReservasPublicaPage.useEffect"], []);
    // --- 2. GENERAR HORARIOS (SLOTS) ---
    const cargarHorariosDisponibles = async ()=>{
        if (!canchaSel || !fecha || !complejo) return;
        setLoading(true);
        // A. Consultar reservas ya hechas
        const { data: ocupados } = await supabase.from('reservas').select('hora_inicio').eq('cancha_id', canchaSel.id).eq('fecha', fecha).neq('estado', 'cancelada');
        const horasOcupadas = ocupados?.map((r)=>r.hora_inicio.slice(0, 5)) || [];
        // B. Obtener apertura y cierre del complejo (con fallbacks por si están vacíos)
        const aperturaStr = complejo.horario_apertura?.toString().slice(0, 5) || "08:00";
        const cierreStr = complejo.horario_cierre?.toString().slice(0, 5) || "23:00";
        const hApertura = parseInt(aperturaStr.split(':')[0]);
        const hCierre = parseInt(cierreStr.split(':')[0]);
        // C. Generar la lista de horas
        const nuevosSlots = [];
        for(let h = hApertura; h < hCierre; h++){
            const horaStr = `${h.toString().padStart(2, '0')}:00`;
            nuevosSlots.push({
                hora: horaStr,
                disponible: !horasOcupadas.includes(horaStr)
            });
        }
        setSlots(nuevosSlots);
        setPaso(3); // Avanzar al paso de horarios
        setLoading(false);
    };
    // --- 3. PROCESAR LA RESERVA ---
    const ejecutarReserva = async (e)=>{
        e.preventDefault();
        setLoading(true);
        // Calculamos hora de fin (asumiendo 1 hora de duración)
        const horaFin = `${(parseInt(slotSel.split(':')[0]) + 1).toString().padStart(2, '0')}:00`;
        const { error } = await supabase.from('reservas').insert({
            complejo_id: complejo.id,
            cancha_id: canchaSel.id,
            fecha: fecha,
            hora_inicio: slotSel,
            hora_fin: horaFin,
            cliente_nombre: nombre,
            cliente_telefono: telefono,
            monto_total: canchaSel.precio_hora,
            monto_seña: canchaSel.precio_hora / 2,
            estado: 'pendiente'
        });
        if (error) {
            alert("Hubo un error: " + error.message);
        } else {
            setReservaOk(true);
        }
        setLoading(false);
    };
    // --- INTERFAZ DE ÉXITO ---
    if (reservaOk) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center p-6 text-center bg-green-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-10 rounded-3xl shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-6xl",
                    children: "✅"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold mt-4",
                    children: "¡Turno reservado!"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 mt-2",
                    children: "En breve recibiras un mensaje para confirmar la seña."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>window.location.reload(),
                    className: "mt-8 bg-green-600 text-white px-10 py-3 rounded-full font-bold hover:bg-green-700 transition",
                    children: "Hacer otra reserva"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
    // --- INTERFAZ PRINCIPAL ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "max-w-md mx-auto min-h-screen p-4 pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "py-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-black text-green-700 italic tracking-tighter uppercase",
                        children: complejo?.nombre || 'CARGANDO...'
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-1 w-20 bg-green-500 mx-auto mt-2 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-black text-gray-400 uppercase mb-4 tracking-widest",
                        children: "1. Elegí tu cancha"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3",
                        children: canchas.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setCanchaSel(c);
                                    setPaso(2);
                                },
                                className: `p-5 rounded-2xl border-2 text-left transition-all ${canchaSel?.id === c.id ? 'border-green-500 bg-green-50 ring-4 ring-green-50' : 'border-gray-100 bg-white'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-gray-800 text-lg",
                                                children: c.nombre
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-600 font-black",
                                                children: [
                                                    "$",
                                                    c.precio_hora
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400 mt-1",
                                        children: "Precio por 1 hora de juego"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, c.id, true, {
                                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            paso >= 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-10 animate-in fade-in slide-in-from-bottom-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-black text-gray-400 uppercase mb-4 tracking-widest",
                        children: "2. ¿Cuándo juegan?"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                className: "flex-1 p-4 rounded-2xl border-2 border-gray-100 outline-none focus:border-green-500 bg-white font-bold",
                                min: new Date().toISOString().split('T')[0],
                                onChange: (e)=>setFecha(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: cargarHorariosDisponibles,
                                disabled: !fecha || loading,
                                className: "bg-black text-white px-8 rounded-2xl font-bold active:scale-95 transition disabled:opacity-20",
                                children: loading ? '...' : 'VER'
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this),
            paso >= 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-10 animate-in fade-in slide-in-from-bottom-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-black text-gray-400 uppercase mb-4 tracking-widest",
                        children: "3. Horarios disponibles"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-2",
                        children: slots.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                disabled: !s.disponible,
                                onClick: ()=>{
                                    setSlotSel(s.hora);
                                    setPaso(4);
                                },
                                className: `p-4 rounded-xl text-sm font-black border-2 transition-all ${!s.disponible ? 'bg-gray-50 text-gray-200 border-gray-50 line-through' : slotSel === s.hora ? 'bg-green-600 text-white border-green-600 shadow-lg shadow-green-200' : 'bg-white border-gray-100 text-gray-700 hover:border-green-200'}`,
                                children: s.hora
                            }, s.hora, false, {
                                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                lineNumber: 184,
                columnNumber: 9
            }, this),
            paso >= 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: ejecutarReserva,
                className: "space-y-4 animate-in fade-in slide-in-from-bottom-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xs font-black text-gray-400 uppercase mb-2 tracking-widest",
                        children: "4. Confirmá tus datos"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Tu nombre completo",
                        required: true,
                        className: "w-full p-4 rounded-xl bg-gray-50 border-transparent border-2 focus:border-green-500 focus:bg-white outline-none transition-all",
                        onChange: (e)=>setNombre(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "tel",
                        placeholder: "WhatsApp (sin 0 ni 15)",
                        required: true,
                        className: "w-full p-4 rounded-xl bg-gray-50 border-transparent border-2 focus:border-green-500 focus:bg-white outline-none transition-all",
                        onChange: (e)=>setTelefono(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                        lineNumber: 216,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: loading,
                        className: "w-full bg-green-600 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-green-200 hover:bg-green-700 active:scale-95 transition-all",
                        children: loading ? 'RESERVANDO...' : 'RESERVAR AHORA'
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-center text-gray-400 px-4",
                        children: "Al reservar, te comprometes a abonar la seña correspondiente para validar el turno."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
                lineNumber: 209,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/page.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s(ReservasPublicaPage, "VQS7ZDWR3sbztUZI2vVFZD76AZo=");
_c = ReservasPublicaPage;
var _c;
__turbopack_context__.k.register(_c, "ReservasPublicaPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_alquiler-canchas_src_dd2046c3._.js.map