# AuraKit Snapshot
- Timestamp: 2026-07-02T01:12:01Z
- Mode: BUILD
- Original Request: llm-wiki Batch 5 → Batch 6 일괄 Ingest — raw/articles/ 전체 737개 / 85개 구버전 synthesis 보충
- Plan: 전체 737개 raw/articles → synthesis + entity + concept + index cascade
- Session ID: 8379b78a-5f0b-4e3e-a05c-444dd070a3b2

## Completed
- [x] Batch 4, 5 — 전체 ingest 완료
- [x] Entity Gate — 48개 entity 페이지 생성 (+13)
- [x] Concept Cascade — 9개 concept 페이지 업데이트
- [x] Cross-link 검증 통과
- [x] 109개 빈 파일(≤5줄/URL만) 스킵 처리
- [x] Batch 6 — 2026-07-01/02 연속 ingest 진행 중 (~122건 오늘 처리)
- [x] 전체 진행률 83.0% (680/819 소재 처리, 810 wiki 페이지, 643 synthesis)

## Remaining
- [ ] ~139개 raw/articles 남은 소재 ingest
- [ ] 85개 구버전 synthesis (5/6 독서 증거 누락) 보충
- [ ] 3개 의도적 broken wikilinks (io.net/jupiter/aptos) 추후 생성

## Last Verification
- Build: N/A (문서 ingest 작업)
- Security: N/A
- Tests: N/A (wiki lint: index ↔ page cross-ref 일관성 수동 확인)

## Key Decisions
- 모든 synthesis 페이지는 `来源_YYYY-MM-DD_제목.md` 네이밍 컨벤션 유지
- PDF 소재는 raw/reports/ 로 이동 후 .md 추출본만 ingest
- WebFetch로 stub 기사(5줄 미만) 전체 본문 복원 — ~15건 처리
- Entity/concept/synthesis 3-tier cascade update: 한 기사당 평균 4-6 페이지 생성/업데이트
- 이미지 URL 깨진 것(微信公众号 등)은 WebFetch 시도 후 unavailable 마킹, 핵심 정보는 텍스트에서 추출

## Next Action
- `继续下一批` — 남은 ~139개 raw/articles 중 20개 단위로 계속 ingest
- Batch 완료 후 lint 돌려 orphan pages / broken links 정리
- 그 다음 85개 구버전 synthesis 보충 작업 전환
