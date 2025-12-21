"use strict";exports.id=569,exports.ids=[569],exports.modules={1351:(e,t,i)=>{i.d(t,{Ol:()=>o,SZ:()=>c,Zb:()=>n,aY:()=>l,eW:()=>p,ll:()=>d});var a=i(5344),r=i(3729),s=i(779);let n=r.forwardRef(({className:e,...t},i)=>a.jsx("div",{ref:i,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));n.displayName="Card";let o=r.forwardRef(({className:e,...t},i)=>a.jsx("div",{ref:i,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",e),...t}));o.displayName="CardHeader";let d=r.forwardRef(({className:e,...t},i)=>a.jsx("h3",{ref:i,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t}));d.displayName="CardTitle";let c=r.forwardRef(({className:e,...t},i)=>a.jsx("p",{ref:i,className:(0,s.cn)("text-sm text-muted-foreground",e),...t}));c.displayName="CardDescription";let l=r.forwardRef(({className:e,...t},i)=>a.jsx("div",{ref:i,className:(0,s.cn)("p-6 pt-0",e),...t}));l.displayName="CardContent";let p=r.forwardRef(({className:e,...t},i)=>a.jsx("div",{ref:i,className:(0,s.cn)("flex items-center p-6 pt-0",e),...t}));p.displayName="CardFooter"},6868:(e,t,i)=>{i.d(t,{Z:()=>o});var a=i(5344),r=i(3729),s=i(1977),n=i(779);let o=r.forwardRef(({className:e,orientation:t="horizontal",decorative:i=!0,...r},o)=>a.jsx(s.f,{ref:o,decorative:i,orientation:t,className:(0,n.cn)("shrink-0 bg-border","horizontal"===t?"h-[1px] w-full":"h-full w-[1px]",e),...r}));o.displayName=s.f.displayName},3247:(e,t,i)=>{i.d(t,{X:()=>n});var a=i(3158),r=i(7023);let s=[{id:"srv_001",title:"Student Visa Assistance",description:"Complete visa application support including document preparation, form filling, interview preparation, and embassy appointment scheduling. Our experts ensure your application is error-free and submitted on time.",category:"Legal",price:299,delivery_days:14,features:["Document checklist and verification","Application form assistance","Interview preparation guide","Embassy appointment scheduling","Real-time application tracking"],is_active:!0,rating:4.8,reviews_count:156},{id:"srv_002",title:"Airport Pickup Service",description:"Reliable airport pickup service with meet & greet. We track your flight and ensure a driver is waiting for you when you arrive. Includes help with luggage and city orientation tips.",category:"Transportation",price:75,delivery_days:1,features:["Flight tracking included","Meet & greet at arrivals","Luggage assistance","City orientation tips","Direct drop to accommodation"],is_active:!0,rating:4.9,reviews_count:312},{id:"srv_003",title:"Student Housing Package",description:"Find your perfect student accommodation with our housing assistance. We help you search, verify, and secure housing near your university with no hidden fees.",category:"Accommodation",price:199,delivery_days:7,features:["Personalized housing search","Virtual property tours","Lease review and negotiation","Move-in checklist","30-day support after move-in"],is_active:!0,rating:4.7,reviews_count:89},{id:"srv_004",title:"Student Bank Account Setup",description:"Easy bank account opening for international students. We guide you through the documentation, help you choose the best bank for students, and schedule your appointment.",category:"Financial",price:49,delivery_days:5,features:["Bank comparison and recommendation","Document preparation","Appointment scheduling","Form filling assistance","First month banking guide"],is_active:!0,rating:4.6,reviews_count:234},{id:"srv_005",title:"Health Insurance Enrollment",description:"Get comprehensive health insurance that meets your university requirements. We compare plans, explain coverage, and help you enroll in the best option for your needs.",category:"Healthcare",price:79,delivery_days:3,features:["Plan comparison (5+ providers)","Coverage explanation","Enrollment assistance","ID card delivery tracking","Claims filing guide"],is_active:!0,rating:4.5,reviews_count:167},{id:"srv_006",title:"SIM Card & Phone Setup",description:"Stay connected from day one. We help you choose the best mobile plan, get your SIM activated, and set up your phone with all essential apps and services.",category:"Connectivity",price:35,delivery_days:1,features:["Plan comparison","SIM card procurement","Number activation","Essential apps setup","International calling setup"],is_active:!0,rating:4.8,reviews_count:445},{id:"srv_007",title:"Monthly Transit Pass",description:"Get your monthly transit pass without the hassle. We help you understand the transit system, apply for student discounts, and get your pass delivered.",category:"Transportation",price:25,delivery_days:2,features:["Transit system orientation","Student discount application","Pass procurement","Route planning assistance","Digital pass setup (if available)"],is_active:!0,rating:4.7,reviews_count:198},{id:"srv_008",title:"Legal Document Translation",description:"Certified translation of your official documents. We handle academic transcripts, certificates, and legal documents with notarized translations accepted by all institutions.",category:"Legal",price:149,delivery_days:5,features:["Certified translators","Notarized translations","Academic documents","Legal certificates","Express delivery available"],is_active:!0,rating:4.9,reviews_count:276}],n=(0,a.Ue)()((0,r.tJ)((e,t)=>({services:s,addService:t=>{let i={...t,id:`srv_${Math.random().toString(36).substring(2,6)}`};return e(e=>({services:[...e.services,i]})),console.log("Service added:",i.id),i},updateService:(t,i)=>{e(e=>({services:e.services.map(e=>e.id===t?{...e,...i}:e)})),console.log("Service updated:",t)},deleteService:t=>{e(e=>({services:e.services.filter(e=>e.id!==t)})),console.log("Service deleted:",t)},toggleServiceStatus:t=>{e(e=>({services:e.services.map(e=>e.id===t?{...e,is_active:!e.is_active}:e)}))},getServiceById:e=>t().services.find(t=>t.id===e),getActiveServices:()=>t().services.filter(e=>e.is_active)}),{name:"services-storage"}))},7060:(e,t,i)=>{i.d(t,{Z:()=>a});/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,i(9224).Z)("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},491:(e,t,i)=>{i.d(t,{Z:()=>a});/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,i(9224).Z)("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]])},4513:(e,t,i)=>{i.d(t,{Z:()=>a});/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,i(9224).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},9508:(e,t,i)=>{i.d(t,{Z:()=>n});var a=i(2),r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),n=(e,t)=>{let i=(0,a.forwardRef)(({color:i="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:c="",children:l,...p},u)=>(0,a.createElement)("svg",{ref:u,...r,width:n,height:n,stroke:i,strokeWidth:d?24*Number(o)/Number(n):o,className:["lucide",`lucide-${s(e)}`,c].join(" "),...p},[...t.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(l)?l:[l]]));return i.displayName=`${e}`,i}},4490:(e,t,i)=>{i.d(t,{Z:()=>a});/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,i(9508).Z)("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]])},7150:(e,t,i)=>{i.d(t,{Z:()=>a});/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,i(9508).Z)("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]])},870:(e,t,i)=>{i.d(t,{Z:()=>a});/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,i(9508).Z)("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]])},2936:(e,t,i)=>{i.d(t,{Z:()=>a});/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,i(9508).Z)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]])},9273:(e,t,i)=>{i.d(t,{Z:()=>a});/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,i(9508).Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},9003:(e,t,i)=>{i.d(t,{Z:()=>a});/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,i(9508).Z)("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]])},9608:(e,t,i)=>{i.d(t,{Z:()=>a});/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,i(9508).Z)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]])},6161:(e,t,i)=>{i.d(t,{Z:()=>a});/**
 * @license lucide-react v0.312.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,i(9508).Z)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]])},6274:(e,t,i)=>{i.d(t,{default:()=>r.a});var a=i(8026),r=i.n(a)},8026:(e,t,i)=>{let{createProxy:a}=i(6843);e.exports=a("/Users/mohankumar/Desktop/project_bhag/studynest-frontend/node_modules/next/dist/client/link.js")},1977:(e,t,i)=>{i.d(t,{f:()=>l});var a=i(3729);i(1202);var r=i(2751),s=i(5344),n=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,t)=>{let i=(0,r.Z8)(`Primitive.${t}`),n=a.forwardRef((e,a)=>{let{asChild:r,...n}=e,o=r?i:t;return(0,s.jsx)(o,{...n,ref:a})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),o="horizontal",d=["horizontal","vertical"],c=a.forwardRef((e,t)=>{let{decorative:i,orientation:a=o,...r}=e,c=d.includes(a)?a:o;return(0,s.jsx)(n.div,{"data-orientation":c,...i?{role:"none"}:{"aria-orientation":"vertical"===c?c:void 0,role:"separator"},...r,ref:t})});c.displayName="Separator";var l=c}};