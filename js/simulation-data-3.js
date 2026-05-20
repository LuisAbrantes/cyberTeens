/* ================================================================
   SIMULATION-DATA-3.JS — Roteiro da simulação de análise de e‑mails
   CyberTeens Academy
   ================================================================ */

const SIMULATION_STAGES_EMAIL = [
    {
        id: 1,
        email: {
            sender: '"Mega Loja Online" <promocoes@megaloja-ofertas.xyz>',
            subject: '🎁 Você ganhou um vale‑compras de R$ 500!',
            body: 'Parabéns! Clique no link abaixo para resgatar seu prêmio:\n\n👉 http://megaloja-premios.xyz/resgate\n\nOferta válida até hoje.',
            indicators: {
                suspicious: [
                    'Domínio do remetente diferente do oficial (megaloja-ofertas.xyz)',
                    'Link para domínio suspeito (megaloja-premios.xyz)',
                    'Urgência exagerada ("até hoje")',
                ],
                legitimate: ['Nenhum – a loja oficial não envia promoções assim.'],
            },
        },
        isPhishing: true,
        feedbackCorrect:
            '✅ Correto! É phishing. O domínio não é o oficial da loja. Nenhuma empresa séria envia links assim.',
        feedbackWrong:
            '⚠️ Errado. Esse e‑mail é golpe. Repare no remetente falso e no link para domínio estranho.',
    },
    {
        id: 2,
        email: {
            sender: '"Banco Itaú" <atendimento@itau.com.br>',
            subject: 'Atualização de segurança obrigatória',
            body: 'Prezado cliente,\n\nSua senha precisa ser redefinida. Acesse:\n\n🔒 https://itau.com.br/atualizar-seguranca\n\nNão compartilhe este link.',
            indicators: {
                suspicious: ['Nenhum – o domínio é oficial.'],
                legitimate: [
                    'Endereço do remetente é @itau.com.br',
                    'Link usa o domínio oficial itau.com.br',
                    'Tom profissional, sem urgência alarmante',
                ],
            },
        },
        isPhishing: false,
        feedbackCorrect:
            '✅ Correto! É legítimo. O e‑mail usa o domínio oficial e não pede dados diretamente.',
        feedbackWrong:
            '⚠️ Cuidado. Este e‑mail é legítimo. O domínio é real. Mas sempre desconfie e acesse o site digitando o endereço.',
    },
    {
        id: 3,
        email: {
            sender: '"Netflix" <suporte@netflix-br.info>',
            subject: 'Sua assinatura foi suspensa',
            body: 'Caro assinante,\n\nSeu pagamento foi recusado. Atualize seus dados em:\n\n📎 https://netflix.com.br-verificar.xyz\n\nApós 24h sua conta será cancelada.',
            indicators: {
                suspicious: [
                    'Remetente falso (@netflix-br.info)',
                    'Link com domínio estranho (netflix.com.br-verificar.xyz)',
                    'Ameaça de cancelamento em 24h',
                ],
                legitimate: ['Logotipo semelhante (mas falsificado).'],
            },
        },
        isPhishing: true,
        feedbackCorrect:
            '✅ Correto! É phishing. O domínio não pertence à Netflix. A empresa nunca ameaça cancelar em 24h.',
        feedbackWrong:
            '⚠️ Errado. Esse é um golpe clássico. Verifique o remetente e o link – ambos falsos.',
    },
    {
        id: 4,
        email: {
            sender: '"Receita Federal" <gov@receita.fazenda.gov.br>',
            subject: 'Restituição do IRPF disponível',
            body: 'Prezado contribuinte,\n\nSua restituição está disponível. Acesse o portal:\n\n🏛️ https://www.gov.br/receitafederal/restituicao\n\nNão é necessário informar senha.',
            indicators: {
                suspicious: [],
                legitimate: [
                    'Domínio oficial (.gov.br)',
                    'Link exato do portal do governo',
                    'Não solicita dados pessoais',
                ],
            },
        },
        isPhishing: false,
        feedbackCorrect:
            '✅ Correto! É legítimo. O domínio .gov.br é oficial. A Receita não pede senha por e‑mail.',
        feedbackWrong:
            '⚠️ Você errou. Este e‑mail é seguro. O endereço e o link são oficiais. Sempre confira o domínio.',
    },
    {
        id: 5,
        email: {
            sender: '"Microsoft Security" <alertas@microsoft-security.org>',
            subject: 'Alerta: dispositivo invadido',
            body: 'Detectamos atividade suspeita no seu PC.\n\nBaixe nossa ferramenta de limpeza:\n\n⬇️ https://microsoft-suporte.com/limpeza.exe\n\nIgnorar este aviso pode causar perda de dados.',
            indicators: {
                suspicious: [
                    'Domínio falso (microsoft-security.org)',
                    'Arquivo executável (.exe) para download',
                    'Tom ameaçador ("pode causar perda de dados")',
                ],
                legitimate: [],
            },
        },
        isPhishing: true,
        feedbackCorrect:
            '✅ Correto! É phishing. A Microsoft nunca envia .exe por e‑mail. O domínio é falso.',
        feedbackWrong:
            '⚠️ Errado. Esse e‑mail é perigoso. Baixar .exe de fonte desconhecida pode instalar malware.',
    },
];