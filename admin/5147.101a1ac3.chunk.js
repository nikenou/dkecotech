"use strict";(self.webpackChunkcorporate_blog_template=self.webpackChunkcorporate_blog_template||[]).push([[5147],{5147:(V,c,e)=>{e.r(c),e.d(c,{SettingsPage:()=>M,default:()=>b});var s=e(92132),O=e(21272),u=e(38413),P=e(55356),h=e(85963),v=e(4198),C=e(42455),r=e(83997),A=e(94061),L=e(30893),y=e(90151),_=e(68074),g=e(7441),o=e(34372),T=e(54514),I=e(56336),x=e(14718),R=e(54894),D=e(74930),i=e(1161),Y=e(98908),Z=e(5409),B=e(88761),U=e(48940),k=e(61535),w=e(12083),q=e(40495),ee=e(50837),se=e(77965);const K=t=>t,W={initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},j=(t,n)=>(0,B.Ay)(t,l=>{switch(n.type){case"GET_DATA_SUCCEEDED":{l.initialData=n.data,l.modifiedData=n.data;break}case"ON_CHANGE":{U(l,["modifiedData",...n.keys.split(".")],n.value);break}default:return t}}),M=()=>{const{formatMessage:t}=(0,R.A)(),{lockApp:n,unlockApp:l}=(0,o.MA)(),z=(0,o.hN)(),{get:S,put:N}=(0,o.ry)();(0,o.L4)();const[{initialData:G,modifiedData:d},f]=(0,O.useReducer)(j,W,K),{data:E,isLoading:F,refetch:H}=(0,D.useQuery)({queryKey:["upload","settings"],async queryFn(){const{data:{data:a}}=await S("/upload/settings");return a}});O.useEffect(()=>{E&&f({type:"GET_DATA_SUCCEEDED",data:E})},[E]);const p=I(G,d),{mutateAsync:Q,isLoading:J}=(0,D.useMutation)({async mutationFn(a){return N("/upload/settings",a)},onSuccess(){H(),z({type:"success",message:{id:"notification.form.success.fields"}})},onError(a){console.error(a)}}),X=async a=>{a.preventDefault(),!p&&(n(),await Q(d),l())},m=({target:{name:a,value:$}})=>{f({type:"ON_CHANGE",keys:a,value:$})};return(0,s.jsxs)(u.g,{tabIndex:-1,children:[(0,s.jsx)(x.m,{title:t({id:(0,i.g)("page.title"),defaultMessage:"Settings - Media Libray"})}),(0,s.jsxs)("form",{onSubmit:X,children:[(0,s.jsx)(P.Q,{title:t({id:(0,i.g)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:(0,s.jsx)(h.$,{disabled:p,loading:J,type:"submit",startIcon:(0,s.jsx)(T.A,{}),size:"S",children:t({id:"global.save",defaultMessage:"Save"})}),subtitle:t({id:(0,i.g)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),(0,s.jsx)(v.s,{children:F?(0,s.jsx)(o.Bl,{}):(0,s.jsx)(C.P,{children:(0,s.jsx)(r.s,{direction:"column",alignItems:"stretch",gap:12,children:(0,s.jsx)(A.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsxs)(r.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,s.jsx)(r.s,{children:(0,s.jsx)(L.o,{variant:"delta",as:"h2",children:t({id:(0,i.g)("settings.blockTitle"),defaultMessage:"Asset management"})})}),(0,s.jsxs)(y.x,{gap:6,children:[(0,s.jsx)(_.E,{col:6,s:12,children:(0,s.jsx)(g.l,{"aria-label":"responsiveDimensions",checked:d.responsiveDimensions,hint:t({id:(0,i.g)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:t({id:(0,i.g)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:a=>{m({target:{name:"responsiveDimensions",value:a.target.checked}})}})}),(0,s.jsx)(_.E,{col:6,s:12,children:(0,s.jsx)(g.l,{"aria-label":"sizeOptimization",checked:d.sizeOptimization,hint:t({id:(0,i.g)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:t({id:(0,i.g)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:a=>{m({target:{name:"sizeOptimization",value:a.target.checked}})}})}),(0,s.jsx)(_.E,{col:6,s:12,children:(0,s.jsx)(g.l,{"aria-label":"autoOrientation",checked:d.autoOrientation,hint:t({id:(0,i.g)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:t({id:(0,i.g)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:a=>{m({target:{name:"autoOrientation",value:a.target.checked}})}})})]})]})})})})})]})]})},b=()=>(0,s.jsx)(o.kz,{permissions:i.P.settings,children:(0,s.jsx)(M,{})})}}]);