"use strict";(self.webpackChunkcorporate_blog_template=self.webpackChunkcorporate_blog_template||[]).push([[5097],{65097:(Y,x,t)=>{t.d(x,{ProtectedSettingsPage:()=>W});var e=t(92132),r=t(21272),O=t(38413),v=t(55356),y=t(4198),o=t(83997),j=t(94061),_=t(30893),E=t(90151),d=t(68074),c=t(7537),T=t(43739),A=t(95336),R=t(85963),i=t(34372),S=t(34313),I=t(54894),h=t(74930),L=t(79793),u=t(12083),C=t(87823);const f=u.Ik().shape({email:u.Yj().email(i.iW.email).required(i.iW.required)}),B=L.default.a`
  color: ${({theme:g})=>g.colors.primary600};
`,W=()=>(0,e.jsx)(i.kz,{permissions:C.P.settings,children:(0,e.jsx)(K,{})}),K=()=>{const g=(0,i.hN)(),{formatMessage:s}=(0,I.A)(),{lockApp:U,unlockApp:b}=(0,i.MA)(),{get:F,post:N}=(0,i.ry)(),[a,V]=r.useState(""),[$,M]=r.useState(!1),[P,k]=r.useState({}),{data:n,isLoading:D}=(0,h.useQuery)(["email","settings"],async()=>{const l=await F("/email/settings"),{data:{config:m}}=l;return m}),p=(0,h.useMutation)(async l=>{await N("/email/test",l)},{onError(){g({type:"warning",message:s({id:"email.Settings.email.plugin.notification.test.error",defaultMessage:"Failed to send a test mail to {to}"},{to:a})})},onSuccess(){g({type:"success",message:s({id:"email.Settings.email.plugin.notification.test.success",defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:a})})},retry:!1});(0,i.L4)(),r.useEffect(()=>{f.validate({email:a},{abortEarly:!1}).then(()=>M(!0)).catch(()=>M(!1))},[a]);const Q=l=>{V(()=>l.target.value)},z=async l=>{l.preventDefault();try{await f.validate({email:a},{abortEarly:!1})}catch(m){m instanceof u.yI&&k((0,i.ed)(m))}U(),p.mutate({to:a}),b()};return(0,e.jsxs)(O.g,{labelledBy:"title","aria-busy":D||p.isLoading,children:[(0,e.jsx)(i.x7,{name:s({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"})}),(0,e.jsx)(v.Q,{id:"title",title:s({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"}),subtitle:s({id:"email.Settings.email.plugin.subTitle",defaultMessage:"Test the settings for the Email plugin"})}),(0,e.jsx)(y.s,{children:D?(0,e.jsx)(i.Bl,{}):n&&(0,e.jsx)("form",{onSubmit:z,children:(0,e.jsxs)(o.s,{direction:"column",alignItems:"stretch",gap:7,children:[(0,e.jsx)(j.a,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(o.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsxs)(o.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(_.o,{variant:"delta",as:"h2",children:s({id:"email.Settings.email.plugin.title.config",defaultMessage:"Configuration"})}),(0,e.jsx)(_.o,{children:s({id:"email.Settings.email.plugin.text.configuration",defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:(0,e.jsx)(B,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer",children:s({id:"email.link",defaultMessage:"Link"})})})})]}),(0,e.jsxs)(E.x,{gap:5,children:[(0,e.jsx)(d.E,{col:6,s:12,children:(0,e.jsx)(c.k,{name:"shipper-email",label:s({id:"email.Settings.email.plugin.label.defaultFrom",defaultMessage:"Default sender email"}),placeholder:s({id:"email.Settings.email.plugin.placeholder.defaultFrom",defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,value:n.settings.defaultFrom})}),(0,e.jsx)(d.E,{col:6,s:12,children:(0,e.jsx)(c.k,{name:"response-email",label:s({id:"email.Settings.email.plugin.label.defaultReplyTo",defaultMessage:"Default response email"}),placeholder:s({id:"email.Settings.email.plugin.placeholder.defaultReplyTo",defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,value:n.settings.defaultReplyTo})}),(0,e.jsx)(d.E,{col:6,s:12,children:(0,e.jsx)(T.l,{name:"email-provider",label:s({id:"email.Settings.email.plugin.label.provider",defaultMessage:"Email provider"}),disabled:!0,value:n.provider,children:(0,e.jsx)(A.c,{value:n.provider,children:n.provider})})})]})]})}),(0,e.jsxs)(o.s,{alignItems:"stretch",background:"neutral0",direction:"column",gap:4,hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,e.jsx)(_.o,{variant:"delta",as:"h2",children:s({id:"email.Settings.email.plugin.title.test",defaultMessage:"Test email delivery"})}),(0,e.jsxs)(E.x,{gap:5,children:[(0,e.jsx)(d.E,{col:6,s:12,children:(0,e.jsx)(c.k,{id:"test-address-input",name:"test-address",onChange:Q,label:s({id:"email.Settings.email.plugin.label.testAddress",defaultMessage:"Recipient email"}),value:a,error:P.email?.id&&s({id:`email.${P.email?.id}`,defaultMessage:"This is an invalid email"}),placeholder:s({id:"email.Settings.email.plugin.placeholder.testAddress",defaultMessage:"ex: developer@example.com"})})}),(0,e.jsx)(d.E,{col:7,s:12,children:(0,e.jsx)(R.$,{loading:p.isLoading,disabled:!$,type:"submit",startIcon:(0,e.jsx)(S.A,{}),children:s({id:"email.Settings.email.plugin.button.test-email",defaultMessage:"Send test email"})})})]})]})]})})})]})}}}]);