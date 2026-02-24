import { writeFileSync } from 'fs';

const content = `import StyledHero from "@/components/StyledHero";
import MuiCardSection from "@/components/MuiCardSection";
import StyledFooter from "@/components/StyledFooter";
import HomeBody from "@/components/HomeBody";

export default function Home() {
  return (
    <>
      <HomeBody />
    </>
  );
}
`;

writeFileSync('/vercel/share/v0-next-shadcn/src/app/page.tsx', content);
writeFileSync('/vercel/share/v0-project/src/app/page.tsx', content);
console.log('Homepage written to both locations');
