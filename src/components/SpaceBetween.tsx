"use client";

import styled from "styled-components";
import type { SCTheme } from "@/theme/scTheme";

interface Article {
  source: string;
  type: string;
  title: string;
  author: string;
  date: string;
}

const Section = styled.section`
  background: #F0F2F5;
  padding: 80px 48px;
  @media (max-width: 768px) { padding: 60px 24px; }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 48px;
  margin-bottom: 48px;
  @media (max-width: 768px) { flex-direction: column; gap: 24px; }
`;

const TitleBlock = styled.div`
  flex: 0 0 auto;
`;

const TheSpace = styled.h2`
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.text};
  margin: 0;
  line-height: 1.1;
`;

const Between = styled.h2`
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.text};
  margin: 0;
  line-height: 1.1;
  border-bottom: 4px solid ${({ theme }: { theme: SCTheme }) => theme.colors.primary};
  display: inline-block;
  padding-bottom: 4px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.textSecondary};
  line-height: 1.6;
  max-width: 400px;
  margin: 0;
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`;

const ArticleCard = styled.a`
  background: #FFFFFF;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  transition: box-shadow 150ms ease;
  &:hover { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); }
`;

const ArticleContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ArticleType = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.textSecondary};
  margin-bottom: 12px;
`;

const ArticleTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.text};
  margin: 0 0 auto;
  line-height: 1.4;
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const ArticleAuthor = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.info};
`;

const ArticleDate = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }: { theme: SCTheme }) => theme.colors.info};
`;

const ARTICLES: Article[] = [
  { source: "capitalbrief.com", type: "Media", title: "x15 & Triple Bubble: Up Bank founder's next bubble", author: "Bronwen Clune", date: "29/9/2025" },
  { source: "thewest.com.au", type: "Media", title: "Pocket money goes digital as Aussie parents start transferring money to kids' bank cards", author: "Kate Emery", date: "29/9/2025" },
  { source: "startupdaily.net", type: "Media", title: "Dom Pym's fintech fund, Triple Bubble, pairs up with CommBank's VC arm, x15ventures", author: "Simon Thomsen", date: "18/9/2025" },
];

export default function SpaceBetween() {
  return (
    <Section>
      <Inner>
        <HeaderRow>
          <TitleBlock>
            <TheSpace>The Space</TheSpace>
            <Between>Between</Between>
          </TitleBlock>
          <Description>
            A place to explore our model and methods, go behind-the-scenes of our
            ventures, and get to know the humans within x15. These are our stories
            from The Space Between.
          </Description>
        </HeaderRow>
        <ArticlesGrid>
          {ARTICLES.map((article) => (
            <ArticleCard key={article.title} href="#">
              <ArticleContent>
                <ArticleType>{article.type}</ArticleType>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleMeta>
                  <ArticleAuthor>{article.author}</ArticleAuthor>
                  <ArticleDate>{article.date}</ArticleDate>
                </ArticleMeta>
              </ArticleContent>
            </ArticleCard>
          ))}
        </ArticlesGrid>
      </Inner>
    </Section>
  );
}
