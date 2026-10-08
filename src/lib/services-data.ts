import ar from "@/i18n/ar.json";
import en from "@/i18n/en.json";

export type LocaleText = { ar: string; en: string };
export interface ServiceDetail { slug: string; path: string; title: LocaleText; seoTitle: LocaleText; seoDesc: LocaleText; short: LocaleText; hero: LocaleText; subServices: { title: LocaleText; desc: LocaleText }[]; sectors: LocaleText[]; faqs: { q: LocaleText; a: LocaleText }[]; }
const pair=(a:string,e:string):LocaleText=>({ar:a,en:e});
export const SERVICES: ServiceDetail[] = ar.services.map((a, i) => { const e=en.services[i]; return { slug:a.slug, path:a.path, title:pair(a.title,e.title), seoTitle:pair(a.seoTitle,e.seoTitle), seoDesc:pair(a.seoDesc,e.seoDesc), short:pair(a.short,e.short), hero:pair(a.hero,e.hero), subServices:a.subServices.map((item,j)=>({title:pair(item.title,e.subServices[j].title),desc:pair(item.desc,e.subServices[j].desc)})), sectors:a.sectors.map((item,j)=>pair(item,e.sectors[j])), faqs:a.faqs.map((item,j)=>({q:pair(item.q,e.faqs[j].q),a:pair(item.a,e.faqs[j].a)})) }; });
export function getService(slug:string){ return SERVICES.find((service)=>service.slug===slug); }
export const INDUSTRIES = ar.industries.map((a,i)=>{const e=en.industries[i];return {key:a.key,ar:a.ar,en:e.en,desc:pair(a.desc,e.desc)};});
