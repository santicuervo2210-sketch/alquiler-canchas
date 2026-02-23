module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/OneDrive/Desktop/alquiler-canchas/src/lib/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/alquiler-canchas/node_modules/@supabase/ssr/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://aegccjwnfpvrioijledw.supabase.co"), ("TURBOPACK compile-time value", "sb_publishable_4UBbVDuXURqbj8Qtf3r36w_AsIhmva_"));
}
}),
"[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReservasPublicaPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/alquiler-canchas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/alquiler-canchas/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/alquiler-canchas/src/lib/supabase/client.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function ReservasPublicaPage() {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$src$2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const [complejo, setComplejo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [canchas, setCanchas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [canchaSel, setCanchaSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fecha, setFecha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [slots, setSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [slotSel, setSlotSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paso, setPaso] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reservaOk, setReservaOk] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nombre, setNombre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [telefono, setTelefono] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cargarDatosIniciales = async ()=>{
            const { data: complejosData } = await supabase.from('complejos').select('*').limit(1);
            if (complejosData && complejosData.length > 0) {
                setComplejo(complejosData[0]);
                const { data: canchasData } = await supabase.from('canchas').select('*').eq('complejo_id', complejosData[0].id).eq('activa', true);
                setCanchas(canchasData || []);
            }
        };
        cargarDatosIniciales();
    }, []);
    const generarHorarios = async ()=>{
        if (!canchaSel || !fecha) return;
        setLoading(true);
        // Buscamos reservas existentes
        const { data: ocupados } = await supabase.from('reservas').select('hora_inicio').eq('cancha_id', canchaSel.id).eq('fecha', fecha).neq('estado', 'cancelada');
        const horasOcupadas = ocupados?.map((r)=>r.hora_inicio.slice(0, 5)) || [];
        // USAMOS EL HORARIO DE LA CANCHA SELECCIONADA
        const apertura = canchaSel.horario_apertura?.slice(0, 5) || "08:00";
        const cierre = canchaSel.horario_cierre?.slice(0, 5) || "23:00";
        const hApertura = parseInt(apertura.split(':')[0]);
        const hCierre = parseInt(cierre.split(':')[0]);
        const nuevosSlots = [];
        for(let h = hApertura; h < hCierre; h++){
            const hStr = `${h.toString().padStart(2, '0')}:00`;
            nuevosSlots.push({
                hora: hStr,
                disponible: !horasOcupadas.includes(hStr)
            });
        }
        setSlots(nuevosSlots);
        setPaso(3);
        setLoading(false);
    };
    const handleReservar = async (e)=>{
        e.preventDefault();
        setLoading(true);
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
        if (error) alert(error.message);
        else setReservaOk(true);
        setLoading(false);
    };
    // Interfaz (simplificada para el ejemplo, mantené tus estilos)
    if (reservaOk) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10 text-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "¡Reserva exitosa!"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
            lineNumber: 97,
            columnNumber: 59
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
        lineNumber: 97,
        columnNumber: 25
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "max-w-md mx-auto p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-6 text-center",
                children: complejo?.nombre
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-2 mb-6",
                children: canchas.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setCanchaSel(c);
                            setPaso(2);
                        },
                        className: `p-4 border rounded-xl ${canchaSel?.id === c.id ? 'border-green-500 bg-green-50' : ''}`,
                        children: [
                            c.nombre,
                            " - $",
                            c.precio_hora
                        ]
                    }, c.id, true, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            paso >= 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        className: "border p-4 rounded-xl flex-1",
                        onChange: (e)=>setFecha(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: generarHorarios,
                        className: "bg-black text-white px-6 rounded-xl",
                        children: "Ver"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this),
            paso >= 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 gap-2 mb-6",
                children: slots.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: !s.disponible,
                        onClick: ()=>{
                            setSlotSel(s.hora);
                            setPaso(4);
                        },
                        className: `p-3 rounded-lg font-bold ${!s.disponible ? 'bg-gray-100 text-gray-300' : slotSel === s.hora ? 'bg-green-600 text-white' : 'bg-white border'}`,
                        children: s.hora
                    }, s.hora, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this),
            paso >= 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleReservar,
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Tu nombre",
                        required: true,
                        className: "w-full border p-4 rounded-xl",
                        onChange: (e)=>setNombre(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "tel",
                        placeholder: "WhatsApp",
                        required: true,
                        className: "w-full border p-4 rounded-xl",
                        onChange: (e)=>setTelefono(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$alquiler$2d$canchas$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "w-full bg-green-600 text-white py-4 rounded-xl font-bold",
                        children: "RESERVAR"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/alquiler-canchas/src/app/dashboard/canchas/page.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dcbe9d11._.js.map