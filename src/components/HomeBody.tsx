"use client";

import { useState } from "react";
import styled from "styled-components";
import type { SCTheme } from "@/theme/scTheme";
import {
  Button, Avatar, Badge, StatCard, Skeleton, Divider, SectionHeader, Chip,
  VentureCard, QuoteBlock, IconCard, CTABanner, ValueCard,
  Alert, Navbar, ConfirmDialog, TextInput, DataTable, TabPanel,
} from "@/components/design-system";

const PageWrap = styled.div`min-height:100vh;background:${({ theme }: { theme: SCTheme }) => theme.colors.background};`;
const Hero = styled.header`background:${({ theme }: { theme: SCTheme }) => theme.colors.dark};padding:140px 48px 80px;position:relative;overflow:hidden;`;
const HeroInner = styled.div`position:relative;z-index:1;max-width:1200px;margin:0 auto;`;
const Eyebrow = styled.span`display:inline-block;font-size:0.85rem;font-weight:500;color:${({ theme }: { theme: SCTheme }) => theme.colors.primary};margin-bottom:16px;letter-spacing:0.02em;`;
const H1 = styled.h1`font-size:clamp(2.5rem,5vw,4rem);font-weight:700;line-height:1.1;margin:0 0 24px;color:${({ theme }: { theme: SCTheme }) => theme.colors.white};`;
const HeroSub = styled.p`font-size:1.125rem;color:${({ theme }: { theme: SCTheme }) => theme.colors.textOnDark};max-width:640px;line-height:1.7;margin:0;`;
const Water = styled.div`position:absolute;bottom:-50px;right:-20px;font-size:clamp(6rem,12vw,14rem);font-weight:700;color:${({ theme }: { theme: SCTheme }) => theme.colors.darkLight};line-height:1;white-space:nowrap;pointer-events:none;user-select:none;`;
const Main = styled.main`max-width:1200px;margin:0 auto;padding:0 48px 120px;`;
const Sec = styled.section`margin-top:80px;`;
const ST = styled.h2`font-size:1.75rem;font-weight:700;color:${({ theme }: { theme: SCTheme }) => theme.colors.text};margin:0 0 8px;`;
const SD = styled.p`font-size:0.95rem;color:${({ theme }: { theme: SCTheme }) => theme.colors.textSecondary};margin:0 0 32px;line-height:1.6;max-width:640px;`;
const CL = styled.span`display:inline-block;font-size:0.7rem;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:${({ theme }: { theme: SCTheme }) => theme.colors.textSecondary};margin-bottom:12px;`;
const LBox = styled.div`background:${({ theme }: { theme: SCTheme }) => theme.colors.surface};border:1px solid ${({ theme }: { theme: SCTheme }) => theme.colors.border};border-radius:${({ theme }: { theme: SCTheme }) => theme.borderRadiusLg};padding:32px;`;
const DBox = styled.div`background:${({ theme }: { theme: SCTheme }) => theme.colors.dark};border-radius:${({ theme }: { theme: SCTheme }) => theme.borderRadiusLg};padding:32px;`;
const Rw = styled.div<{$g?:string;$w?:boolean}>`display:flex;align-items:center;gap:${({$g})=>$g||"12px"};flex-wrap:${({$w})=>$w?"wrap":"nowrap"};`;
const G2 = styled.div`display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:24px;`;
const G3 = styled.div`display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px;`;
const FB = styled.div`margin-left:-48px;margin-right:-48px;`;
const CGrid = styled.div`display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;`;
const Sw = styled.div<{$c:string;$d?:boolean}>`height:72px;border-radius:${({ theme }: { theme: SCTheme }) => theme.borderRadiusLg};background:${({$c})=>$c};display:flex;flex-direction:column;justify-content:flex-end;padding:8px 12px;font-size:0.7rem;font-weight:600;color:${({$d})=>$d?"#FFF":"#1A1D23"};border:1px solid rgba(0,0,0,0.06);`;
const TypR = styled.div`display:flex;align-items:baseline;gap:24px;padding:16px 0;border-bottom:1px solid ${({ theme }: { theme: SCTheme }) => theme.colors.borderLight};`;
const TypL = styled.span`width:80px;flex-shrink:0;font-size:0.75rem;font-weight:600;color:${({ theme }: { theme: SCTheme }) => theme.colors.textSecondary};text-transform:uppercase;letter-spacing:0.04em;`;
const TypS = styled.span<{$s:string;$w:number}>`font-size:${({$s})=>$s};font-weight:${({$w})=>$w};color:${({ theme }: { theme: SCTheme }) => theme.colors.text};line-height:1.3;`;
const SpG = styled.div`display:flex;align-items:flex-end;gap:20px;flex-wrap:wrap;`;
const SpB = styled.div<{$s:string}>`width:${({$s})=>$s};height:${({$s})=>$s};background:${({ theme }: { theme: SCTheme }) => theme.colors.primary};border-radius:2px;opacity:0.8;`;
const SpL = styled.div`text-align:center;`;
const SpN = styled.div`font-size:0.7rem;font-weight:600;color:${({ theme }: { theme: SCTheme }) => theme.colors.text};margin-top:6px;`;
const SpV = styled.div`font-size:0.65rem;color:${({ theme }: { theme: SCTheme }) => theme.colors.textSecondary};`;

interface VR{id:string;name:string;year:string;type:string;status:string}
const TCOLS=[{key:"name" as const,label:"Venture"},{key:"year" as const,label:"Year"},{key:"type" as const,label:"Type"},{key:"status" as const,label:"Status",render:(v:unknown)=>{const s=String(v);const c=s==="Active"?"#2e7d32":s==="In Pilot"?"#ed6c02":"#7B8FA1";return <span style={{color:c,fontWeight:600,fontSize:"0.85rem"}}>{s}</span>}}];
const TDATA:VR[]=[{id:"1",name:"Home-in",year:"2020",type:"Built & owned",status:"Active"},{id:"2",name:"Unloan",year:"2022",type:"Built & owned",status:"Active"},{id:"3",name:"Truyu",year:"2024",type:"Built & owned",status:"In Pilot"},{id:"4",name:"Payble",year:"2021",type:"Early-stage",status:"Active"},{id:"5",name:"Paytron",year:"2022",type:"Xccelerate",status:"Active"},{id:"6",name:"Gable",year:"2024",type:"Xccelerate",status:"Active"}];
const BI=<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="6" y="14" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"/><rect x="16" y="6" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none"/></svg>;
const II=<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="6" y="6" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"/><rect x="18" y="18" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none"/></svg>;
const ScI=<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><path d="M24 6v36M6 24h36M12 12l24 24M36 12L12 36" stroke="currentColor" strokeWidth="2"/></svg>;

export default function HomeBody() {
  const [dOpen, setDOpen] = useState(false);
  return (
    <PageWrap>
      <Navbar title="x15ventures" items={[{label:"Tokens",href:"#tokens"},{label:"Components",href:"#components"}]} variant="dark" />
      <Hero><HeroInner><Eyebrow>Design System</Eyebrow><H1>x15ventures Component Library</H1><HeroSub>A comprehensive set of Styled Components and Material UI primitives, themed to the x15ventures brand. Built with Next.js 15, Styled Components 5, and MUI 7.</HeroSub></HeroInner><Water>x15</Water></Hero>
      <Main>
        <Sec id="tokens"><ST>Color Palette</ST><SD>Brand colors derived from the x15ventures identity. Primary hot pink for CTAs, dark charcoal for immersive sections, and slate blue for muted content.</SD>
          <CGrid>
            <Sw $c="#FF0080" $d>Primary<span style={{opacity:0.7}}>#FF0080</span></Sw>
            <Sw $c="#D9006C" $d>Primary Dark<span style={{opacity:0.7}}>#D9006C</span></Sw>
            <Sw $c="#2B3039" $d>Dark<span style={{opacity:0.7}}>#2B3039</span></Sw>
            <Sw $c="#343A44" $d>Dark Light<span style={{opacity:0.7}}>#343A44</span></Sw>
            <Sw $c="#1A1D23" $d>Near Black<span style={{opacity:0.7}}>#1A1D23</span></Sw>
            <Sw $c="#7B8FA1" $d>Slate Blue<span style={{opacity:0.7}}>#7B8FA1</span></Sw>
            <Sw $c="#5C6370" $d>Text Secondary<span style={{opacity:0.7}}>#5C6370</span></Sw>
            <Sw $c="#F0F2F5">Background<span style={{opacity:0.7}}>#F0F2F5</span></Sw>
            <Sw $c="#FFFFFF">Surface<span style={{opacity:0.7}}>#FFFFFF</span></Sw>
            <Sw $c="#D4D8DE">Border<span style={{opacity:0.7}}>#D4D8DE</span></Sw>
          </CGrid>
        </Sec>
        <Sec><ST>Typography Scale</ST><SD>Inter is used across all weights. The scale runs from 0.75rem (xs) to 3.5rem (hero).</SD>
          <LBox><TypR><TypL>Hero</TypL><TypS $s="3.5rem" $w={700}>x15ventures</TypS></TypR><TypR><TypL>Display</TypL><TypS $s="2rem" $w={700}>Building the future</TypS></TypR><TypR><TypL>XXL</TypL><TypS $s="1.5rem" $w={700}>Venture Scaler</TypS></TypR><TypR><TypL>XL</TypL><TypS $s="1.25rem" $w={600}>Portfolio Companies</TypS></TypR><TypR><TypL>LG</TypL><TypS $s="1.125rem" $w={500}>Made to scale</TypS></TypR><TypR><TypL>MD</TypL><TypS $s="1rem" $w={400}>Body text for general content.</TypS></TypR><TypR><TypL>SM</TypL><TypS $s="0.875rem" $w={400}>Caption and secondary info.</TypS></TypR><TypR><TypL>XS</TypL><TypS $s="0.75rem" $w={500}>LABEL / OVERLINE</TypS></TypR></LBox>
        </Sec>
        <Sec><ST>Spacing Scale</ST><SD>A consistent spacing scale used across padding, margins, and gaps.</SD>
          <LBox><SpG>{[{n:"xs",v:"4px"},{n:"sm",v:"8px"},{n:"md",v:"16px"},{n:"lg",v:"24px"},{n:"xl",v:"32px"},{n:"xxl",v:"48px"}].map(s=><SpL key={s.n}><SpB $s={s.v}/><SpN>{s.n}</SpN><SpV>{s.v}</SpV></SpL>)}</SpG></LBox>
        </Sec>
        <Sec id="components"><ST>SectionHeader</ST><SD>Reusable heading with optional eyebrow and subtitle. Light and dark variants.</SD>
          <LBox style={{marginBottom:24}}><CL>Light variant</CL><SectionHeader eyebrow="our mission" title="We build, buy, and invest in startups" subtitle={"Connecting innovative startups to Australia\u2019s leading bank."} variant="light"/></LBox>
          <DBox><CL style={{color:"#7B8FA1"}}>Dark variant</CL><SectionHeader eyebrow="our portfolio" title="Our ventures" subtitle={"Products and services that improve people\u2019s lives."} variant="dark"/></DBox>
        </Sec>
        <Sec><ST>Button</ST><SD>Four variants (primary, secondary, outline, ghost) across three sizes. Supports disabled and full-width.</SD>
          <LBox><CL>Variants</CL><Rw $g="12px" $w><Button variant="primary">Primary</Button><Button variant="secondary">Secondary</Button><Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button></Rw>
          <div style={{marginTop:32}}><CL>Sizes</CL><Rw $g="12px" $w><Button size="sm">Small</Button><Button size="md">Medium</Button><Button size="lg">Large</Button></Rw></div>
          <div style={{marginTop:32}}><CL>States</CL><Rw $g="12px" $w><Button disabled>Disabled</Button><Button variant="outline" disabled>Disabled Outline</Button></Rw></div>
          <div style={{marginTop:32}}><CL>Full width</CL><Button fullWidth variant="primary">Full Width Button</Button></div></LBox>
        </Sec>
        <Sec><ST>Chip</ST><SD>Filter and label chips in outlined, default, and filled styles.</SD>
          <LBox><CL>Outlined</CL><Rw $g="8px" $w style={{marginBottom:24}}><Chip variant="outlined" active>All</Chip><Chip variant="outlined">{"Built & owned"}</Chip><Chip variant="outlined">Early-stage</Chip><Chip variant="outlined">Xccelerate</Chip></Rw>
          <CL>Default</CL><Rw $g="8px" $w style={{marginBottom:24}}><Chip variant="default" active>Active</Chip><Chip variant="default">Fintech</Chip><Chip variant="default">PropTech</Chip></Rw>
          <CL>Filled</CL><Rw $g="8px" $w><Chip variant="filled" active>Featured</Chip><Chip variant="filled">New</Chip><Chip variant="filled" size="sm">Small</Chip></Rw></LBox>
        </Sec>
        <Sec><ST>Avatar</ST><SD>User initials or image. Three sizes with deterministic color from name.</SD>
          <LBox><Rw $g="16px"><Avatar name="Toby Norton-Smith" size="lg"/><Avatar name="Paul Cobban" size="md"/><Avatar name="Sarah Jones" size="md"/><Avatar name="Alex Lee" size="sm"/><Avatar name="Kim Nguyen" size="sm"/></Rw></LBox>
        </Sec>
        <Sec><ST>Badge</ST><SD>Status indicators with five variants and optional dot prefix.</SD>
          <LBox><Rw $g="12px" $w><Badge variant="default" dot>Default</Badge><Badge variant="success" dot>Active</Badge><Badge variant="warning" dot>In Pilot</Badge><Badge variant="error" dot>Closed</Badge><Badge variant="info" dot>Review</Badge></Rw>
          <div style={{marginTop:20}}><Rw $g="12px" $w><Badge variant="success">Funded</Badge><Badge variant="info">Series A</Badge><Badge variant="default">PropTech</Badge></Rw></div></LBox>
        </Sec>
        <Sec><ST>StatCard</ST><SD>Metric cards with label, value, and optional trend indicator.</SD>
          <G3><StatCard label="Portfolio companies" value="14" change="+2 this year" trend="up"/><StatCard label="Active ventures" value="7" change="Same as last quarter" trend="neutral"/><StatCard label="Employees" value="120+" change="+15% YoY" trend="up"/></G3>
        </Sec>
        <Sec><ST>ValueCard</ST><SD>Content cards with title and description. Light and dark variants.</SD>
          <G2 style={{marginBottom:24}}><ValueCard title="Move fast" description="We ship early, iterate quickly, and make decisions with urgency." variant="light"/><ValueCard title="Obsess over customers" description="We build products people actually want by listening deeply." variant="light"/></G2>
          <DBox style={{padding:32}}><G2><ValueCard title="Think big" description="We tackle hard problems that can change millions of lives." variant="dark"/><ValueCard title="Own the outcome" description="We take responsibility end-to-end." variant="dark"/></G2></DBox>
        </Sec>
        <Sec><ST>IconCard</ST><SD>Feature cards with icon, title, and description on dark backgrounds.</SD>
          <DBox><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))",gap:32}}><IconCard icon={BI} title="Built & owned ventures" description="Wholly-owned startups we have built, launched, or acquired." variant="dark"/><IconCard icon={II} title="Early-stage investments" description="Pre-Series B startups with a clear benefit to CommBank." variant="dark"/><IconCard icon={ScI} title="Xccelerate investments" description="Pre-Series A startups with an MVP and partnership potential." variant="dark"/></div></DBox>
        </Sec>
        <Sec><ST>VentureCard</ST><SD>Portfolio cards with watermark effect, category chip, and info bar.</SD>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:24}}><VentureCard name="Home-in" year="2020" category="Built & owned" description="Simplifies the home-buying journey." brandColor="#3B82F6"/><VentureCard name="Unloan" year="2022" category="Built & owned" description="A simpler, fairer home loan." brandColor="#FF0080"/><VentureCard name="Payble" year="2021" category="Early-stage" description="Flexible payment plans for bills." brandColor="#2B3039"/></div>
        </Sec>
        <Sec><ST>QuoteBlock</ST><SD>Blockquote with author attribution. Light and dark variants.</SD>
          <div style={{display:"flex",flexDirection:"column",gap:24}}><QuoteBlock quote={"We\u2019re a venture scaler powered by CommBank, building products that improve people\u2019s lives."} author="Toby Norton-Smith" role="CEO, x15ventures" variant="light"/><QuoteBlock quote="The best way to predict the future is to build it." author="Paul Cobban" role="Chief Entrepreneur, CommBank" variant="dark"/></div>
        </Sec>
        <Sec><ST>Divider</ST><SD>Horizontal rule with optional centered label. Three spacing sizes.</SD>
          <LBox><p style={{fontSize:"0.9rem",color:"#5C6370",margin:"0 0 8px"}}>Simple divider</p><Divider spacing="md"/><p style={{fontSize:"0.9rem",color:"#5C6370",margin:"16px 0 8px"}}>With label</p><Divider label="Section Break" spacing="md"/><p style={{fontSize:"0.9rem",color:"#5C6370",margin:"16px 0 8px"}}>Different spacings</p><Divider label="SM" spacing="sm"/><Divider label="MD" spacing="md"/><Divider label="LG" spacing="lg"/></LBox>
        </Sec>
        <Sec><ST>Skeleton</ST><SD>Loading placeholders with shimmer animation.</SD>
          <LBox><Rw $g="16px" style={{marginBottom:24}}><Skeleton variant="circular" width={48} height={48}/><div style={{flex:1}}><Skeleton variant="text" width="40%"/><div style={{height:8}}/><Skeleton variant="text" width="70%"/></div></Rw><Skeleton variant="rectangular" height={120}/><div style={{height:16}}/><Skeleton variant="text" lines={3}/></LBox>
        </Sec>
        <Sec><ST>Alert</ST><SD>MUI-based alerts with severity levels, dismissible option, and variant styles.</SD>
          <div style={{display:"flex",flexDirection:"column",gap:16}}><Alert severity="info" title="Information">{"x15ventures is CommBank\u2019s venture scaling business."}</Alert><Alert severity="success" title="Success">Your application has been submitted.</Alert><Alert severity="warning" title="Warning" dismissible>This venture is currently in pilot phase.</Alert><Alert severity="error" title="Error">Unable to process your request.</Alert><Alert severity="info" variant="outlined" dismissible>Outlined variant with dismiss.</Alert></div>
        </Sec>
        <Sec><ST>TextInput</ST><SD>MUI TextField wrapper with outlined, filled, and standard variants.</SD>
          <LBox><div style={{display:"flex",flexDirection:"column",gap:20,maxWidth:480}}><TextInput label="Venture name" placeholder="e.g. Home-in"/><TextInput label="Description" placeholder="Brief description" multiline rows={3}/><TextInput label="Year founded" placeholder="2024" variant="filled"/><TextInput label="Disabled field" disabled value="x15ventures"/><TextInput label="Error state" error helperText="This field is required"/></div></LBox>
        </Sec>
        <Sec><ST>ConfirmDialog</ST><SD>Modal confirmation dialog with customizable actions.</SD>
          <LBox><Button variant="primary" onClick={()=>setDOpen(true)}>Open Dialog</Button><ConfirmDialog open={dOpen} title="Remove venture?" description="This will permanently remove the venture from the portfolio." confirmLabel="Remove" confirmColor="error" onConfirm={()=>setDOpen(false)} onCancel={()=>setDOpen(false)}/></LBox>
        </Sec>
        <Sec><ST>DataTable</ST><SD>Data table with typed columns and custom cell renderers.</SD><DataTable columns={TCOLS} rows={TDATA} rowKey="id"/></Sec>
        <Sec><ST>TabPanel</ST><SD>Tabbed navigation with content panels.</SD>
          <LBox><TabPanel tabs={[{label:"Overview",content:<p style={{margin:0,color:"#1A1D23",lineHeight:1.6}}>{"x15ventures is CommBank\u2019s venture scaling business."}</p>},{label:"Portfolio",content:<div style={{display:"flex",gap:12,flexWrap:"wrap"}}><Badge variant="success" dot>Home-in</Badge><Badge variant="success" dot>Unloan</Badge><Badge variant="success" dot>Kit</Badge><Badge variant="warning" dot>Truyu</Badge><Badge variant="info" dot>Payble</Badge></div>},{label:"Stats",content:<G3><StatCard label="Total ventures" value="14"/><StatCard label="Built & owned" value="7"/><StatCard label="Investments" value="7"/></G3>}]}/></LBox>
        </Sec>
        <Sec><ST>Navbar</ST><SD>MUI AppBar with transparent overlay, responsive drawer, and dark-themed mobile menu.</SD>
          <DBox style={{padding:0,overflow:"hidden",position:"relative",minHeight:72}}><div style={{position:"relative"}}><Navbar title="x15ventures" items={[{label:"Home",href:"#"},{label:"About",href:"#"},{label:"Portfolio",href:"#"},{label:"People",href:"#"}]} variant="dark"/></div></DBox>
        </Sec>
        <Sec><ST>CTABanner</ST><SD>Full-width call-to-action banner in primary or dark variant.</SD>
          <FB><CTABanner title="Want to work at x15ventures?" subtitle={"We\u2019re always looking for people who want to build things that matter."} buttonLabel="View open roles" variant="dark"/></FB>
          <div style={{height:24}}/>
          <FB><CTABanner title="Partner with us" subtitle="We work with startups that can improve the lives of 15 million CommBank customers." buttonLabel="Get in touch" variant="primary"/></FB>
        </Sec>
      </Main>
    </PageWrap>
  );
}
