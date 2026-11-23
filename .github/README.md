# Teuzin Core OS

**PT-BR** · [English below](#english)

Sistema leve para infraestrutura doméstica na **BTT Pi V1.2** (Allwinner H616, 1 GB de RAM), um projeto da **Teuzin Labs**. Base: Debian 13 (trixie) minimal com kernel 6.18 LTS, gerada por CI a partir do ecossistema BIGTREETECH CB1.

> **Projeto derivado.** Este repositório descende de [bigtreetech/CB1](https://github.com/bigtreetech/CB1) e **não envia alterações de volta ao original**. A atribuição e as licenças de terceiros são preservadas. O `readme.md` original continua na raiz do repositório, sem alterações.

## Estado atual
- Marco 1 (pesquisa técnica): concluído.
- Marco 2 (base do sistema, trilha do kernel LTS): em andamento. A imagem base já compila no GitHub Actions; **ainda não foi testada na placa**.
- Serviços previstos (planejados, ainda não implementados): Pi-hole, Tailscale, SSH, Wake-on-LAN, painel e API do Teuzin Core, Cockpit complementar.

## Downloads
Toda build bem-sucedida vira uma **pré-release (não testada)** em [Releases](../../releases). Só depois do teste em hardware ela é promovida a release normal. Grave sempre em um microSD **novo**, nunca no cartão de recuperação antigo, e confira o checksum antes.

## Documentação
[Visão geral](../docs/PROJECT_OVERVIEW.md) · [Arquitetura](../docs/ARCHITECTURE.md) · [Decisões](../docs/DECISIONS.md) · [Segurança](../docs/SECURITY.md) · [Roadmap](../docs/ROADMAP.md) · [Kernel](../docs/KERNEL-ROADMAP.md) · [Marco 2](../docs/milestones/02-BASE-SYSTEM.md)

Site do projeto: https://core.teuzin.com.br

---

<a id="english"></a>

## English

Lightweight home-infrastructure OS for the **BTT Pi V1.2** (Allwinner H616, 1 GB RAM), by **Teuzin Labs**. Base: Debian 13 (trixie) minimal with the 6.18 LTS kernel, built by CI from the BIGTREETECH CB1 ecosystem.

> **Derivative project.** This repository descends from [bigtreetech/CB1](https://github.com/bigtreetech/CB1) and **never sends changes back to the original**. Attribution and third-party licenses are preserved. The original `readme.md` stays in the repository root, unchanged.

**Status:** Milestone 1 (research) done; Milestone 2 (base system, LTS kernel track) in progress. The base image builds on GitHub Actions but is **not yet tested on hardware**. Planned services (not implemented yet): Pi-hole, Tailscale, SSH, Wake-on-LAN, Teuzin Core panel and API, complementary Cockpit.

**Downloads:** every successful build is published as an **untested pre-release** under [Releases](../../releases) and promoted to a normal release only after hardware testing. Flash only to a **new** microSD, never the old recovery card, and verify the checksum first.

Website: https://core.teuzin.com.br
