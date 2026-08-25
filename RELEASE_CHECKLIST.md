# Site Publication Checklist

This checklist is for maintainers publishing the AnyTTY website and product documentation. Product binaries, installers, tags, and GitHub Releases are owned by [`anytty/anytty`](https://github.com/anytty/anytty); this repository must not publish a second copy.

## Source and boundary

- [ ] Select a reviewed site commit and review the complete public diff.
- [ ] Confirm the site contains no private service implementation, production configuration, credentials, or private history.
- [ ] Run `npm run site:check` in this repository.
- [ ] Review generated files, screenshots, fixtures, and notices for secrets and personal data.

## Quality

- [ ] Confirm product claims against the current public client source and Release notes.
- [ ] Build the Pages artifact and inspect desktop, phone, keyboard, and reduced-motion behavior.
- [ ] Confirm README, documentation, issue forms, and security links resolve.
- [ ] Review `CHANGELOG.md`, supported platforms, known limitations, and upgrade notes.

## Legal and supply chain

- [ ] Confirm Apache-2.0 `LICENSE`, `NOTICE`, DCO, trademark policy, and copyright years.
- [ ] Regenerate and review Go, npm, Android, iOS, font, and pinned third-party notices.
- [ ] Review Dependabot and CI results; investigate known vulnerabilities and document accepted risk.
- [ ] Confirm every installer and download link points to `anytty/anytty` and uses its checksums.

## GitHub and publication

- [ ] Enable private vulnerability reporting and verify the maintainer notification path.
- [ ] Configure GitHub Pages to use GitHub Actions and verify the `anytty.com` custom domain, HTTPS enforcement, and canonical URLs.
- [ ] Review branch protection, required checks, CODEOWNERS, Discussions, issue permissions, and Actions permissions.
- [ ] Decide whether the existing public history is suitable; only then consider a reviewed clean-history initialization.
- [ ] Verify this repository has not created a product Release; publish product tags and assets only from `anytty/anytty`.
- [ ] Publish only after a second maintainer or designated reviewer signs off on the boundary audit.
