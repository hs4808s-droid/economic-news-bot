'use strict';
// 리포트 본문에서 티커 후보를 뽑는 공용 규칙. build_tickers / validate_report / verify_data 가 함께 쓴다.
// 대문자 2~5자(+ .B 같은 클래스)만 후보로 보고, 티커가 아닌 약어는 NOT_TICKERS 로 걸러낸다.
// ponytail: 정규식+차단목록 방식이라 완벽하지 않다. 못 거른 약어는 tickers.json 에 sector '?'로 들어가고
//           경고만 낸다(실패 아님). 정확도가 필요하면 Finnhub symbol 목록과 대조한다.

const NOT_TICKERS = new Set(`AI ET EDT EST KST ETF FOMC CAPEX VIX CPI SOX CME EPS PCE WTI PPI GPU ISM GDP HBM PMI DXY ES NQ YM RTY GC ZN TOP CEO CFO COO CTO CHRO EVP SVP
NFP VVIX AWS NAND DRAM SKEW SPX NDX JOLTS CPU SEP RSU SEC CNBC TPU AUM HDD IPO ASIC GAAP BLS EPYC FTC EU CL CBOE SK ECI YTD PPA OEM NT MOU IT EDGAR PC FAA ADR WFE SB
NHTSA NDA MAX IEEPA GPT GLJ DMA CPO BEA ATH ASP ARR SPV RPO ROI PT OPEC LOI FMS FHFA EDA ECB DOJ CLO CDS WSJ USA PER OS NIM NAHB HPC FY FTSE FSD CD BOM BMO USD TV SUV
TSMC TNX TYX ADP IR BE AT AP AS ID IE IP IV JD KB LP LW MT NA NC NY PL PTC RIA RBC TD TMT TECH TEAM NATO NASD NAR NAV NFIB NIKE NAVER PIMCO PHLX NYSE FRED EIA EIKN EGS FIFA FAIT FBAR
FCF FFR DCF DSA DYN DIP DIMM EUV EV CJEU CFNAI CDU CDN CCC CCCS CAO CAC BPO BNY ASUS ASME ARK AOL AHE AGI HIF HIF HP HMI HTZ ICE IRR ISG ISI ITB IPF IB LEI LFPR LLM MMF MLQ
OTM OI OCC OCI OCP ODM PCB PBR PJM PORTS PPLI PSU PT SAMR SASAC SIG SNS SW TCMB TCO USDC UWM VR WARN WHO WD XP FT FULL GW GCP FLEX`.split(/\s+/));

const RE = /(?<![A-Za-z0-9가-힣_])([A-Z]{2,5}(?:\.[A-Z])?)(?![A-Za-z0-9_])/g;

function extractTickers(md) {
  const out = new Set();
  // URL·링크 안의 대문자는 제외
  const text = md.replace(/https?:\/\/\S+/g, ' ');
  for (const m of text.matchAll(RE)) if (!NOT_TICKERS.has(m[1])) out.add(m[1]);
  return [...out];
}

module.exports = { extractTickers, NOT_TICKERS };
