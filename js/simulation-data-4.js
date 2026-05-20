/* ================================================================
   SIMULATION-DATA-4.JS — Simulação de Golpe Amoroso (Romance Scam)
   Um golpista tenta criar relacionamento para roubar dinheiro
   CyberTeens Academy
   ================================================================ */

const SIMULATION_STAGES_ROMANCE_SCAM = [
    {
        id: 1,
        scammerMessage:
            'Oi! 😊 Achei seu perfil lindo e quis conversar. Meu nome é Lucas, sou piloto de drones ' +
            'e trabalho em projetos internacionais. Você parece uma pessoa incrível! Como você se chama? ' +
            'Pode ser que nos vejamos em breve, viajo muito para São Paulo.',
        options: [
            {
                text: '"Oi Lucas! Legal conhecer você. Que tipo de trabalho você faz?"',
                isSafe: false,
                feedback:
                    'Atenção! Você está sendo puxado para uma conversa que parece inocente. ' +
                    'Perfis atraentes que chegam do nada pedindo conversa privada são frequentemente golpistas. ' +
                    'Golpes amorosos começam assim: com perguntas que parecem interesse genuíno.',
            },
            {
                text: '"Obrigada, mas você é desconhecido. De onde você me achou?"',
                isSafe: true,
                feedback:
                    'Correto! Questionar como desconhecidos o encontraram é essencial. ' +
                    'Golpistas trabalham em escala — eles usam a mesma mensagem para centenas de pessoas. ' +
                    'Relacionamentos reais começam com amigos em comum ou contextos auténticos.',
            },
            {
                text: '"Você é bonitão demais. Parece foto de modelo! Pode me enviar mais fotos?"',
                isSafe: false,
                feedback:
                    'Atenção! Fotos que parecem de modelo geralmente SÃO de modelos — golpistas roubam imagens de redes sociais. ' +
                    'Você está caindo no jogo de criar intimidade falsa que levará a pedidos de dinheiro.',
            },
        ],
    },
    {
        id: 2,
        scammerMessage:
            'Entendi sua desconfiança, é seguro assim! Bem, achei você tão legal que gostaria de ' +
            'conhecer melhor. Sabe, estou trabalhando em um grande projeto de mineração de ouro na Malásia ' +
            'e é difícil estar longe. Mas você é diferente... sinto uma conexão especial. ' +
            'Posso ser sincero? Tenho raríssimo acesso à internet aqui. Você teria Telegram ou WhatsApp? ' +
            'Seria mais fácil conversar por lá.',
        options: [
            {
                text: '"Claro! Meu WhatsApp é +55 11 98765-4321. Converso por lá sim!"',
                isSafe: false,
                feedback:
                    'Atenção! Você acabou de compartilhar seu número real em uma rede que não deveria. ' +
                    'Golpistas podem usar isso para clonar seu WhatsApp, enviar mensagens aos seus contatos ou vender seus dados. ' +
                    'Além disso, a história de "sem internet" é um clássico — desculpa para afastá-lo de plataformas com segurança.',
            },
            {
                text: '"Não compartilho meu número real com estranhos. Se você é genuíno, podemos conversar aqui mesmo no Messenger."',
                isSafe: true,
                feedback:
                    'Correto! Manter conversas em plataformas que você não precisa vincular dados pessoais é mais seguro. ' +
                    'Golpistas frequentemente pedem para mudar de plataforma para escapar de moderação e registros. ' +
                    'Também, pessoas de verdade conseguem usar internet normalmente em 2026.',
            },
            {
                text: '"Que romântico! Claro, vou adicionar você. Aqui está meu Telegram: @seu_usuario"',
                isSafe: false,
                feedback:
                    'Atenção! Mudança de plataforma é sinal de alerta. Golpistas querem sair de plataformas com moderação. ' +
                    'Além disso, a história é muito romântica demais e muito rápida — relacionamentos reais levam tempo para desenvolver confiança.',
            },
        ],
    },
    {
        id: 3,
        scammerMessage:
            'Você é incrívelmente especial. Nunca me senti assim com ninguém. ' +
            'Sabe, estou aqui na Malásia trabalhando em um negócio de mineração de ouro, mas tenho ' +
            'um problema urgente. Meu visto expirou no meio do projeto e preciso de $3.000 USD rapidamente ' +
            'para renovar a documentação. Se não conseguir, vou ser deportado e perder tudo. ' +
            'Você poderia me ajudar? Prometo devolver assim que chegar em São Paulo — vamos nos casar! 💕',
        options: [
            {
                text: '"Que horror! Claro que te ajudo! Como eu envio o dinheiro? Pelo TransferWise?"',
                isSafe: false,
                feedback:
                    'ALERTA VERMELHO! Este é o ponto final do golpe. Toda a história — o encontro rápido, ' +
                    'a mudança de plataforma, o "romance" intenso — foi construído para chegar aqui: ' +
                    'um pedido emocional de dinheiro. Nunca envie dinheiro para estranhos da internet, ' +
                    'independente de quão convincente seja a história. Relacionamentos reais não começam com pedidos de dinheiro.',
            },
            {
                text: '"Lucas, mesmo que você seja genuíno, eu não deveria emprestar dinheiro para estranhos. ' +
                    'Se está em apuros legítimos, procure sua embaixada ou contate sua família."',
                isSafe: true,
                feedback:
                    'Correto! MUITO correto! Esta é a decisão que evita o roubo. ' +
                    'Regra de ouro: NUNCA empreste dinheiro para pessoas que conheceu online, especialmente se ' +
                    'pediram para mudar de plataforma e criaram intimidade rápida. ' +
                    'Governos e embaixadas possuem programas para ajudar cidadãos em dificuldades — não estranhos da internet.',
            },
            {
                text: '"Qual é o nome da empresa de mineração? Vou pesquisar e verificar tudo antes..."',
                isSafe: false,
                feedback:
                    'Atenção! Você está negociando com o golpista. Mesmo "verificando", ' +
                    'você está considerando enviar dinheiro — o que já é o erro. ' +
                    'Documentos podem ser falsificados, empresas podem ser inventadas. ' +
                    'A resposta segura é simples: NUNCA envie dinheiro para estranhos online. Fim de história.',
            },
        ],
    },
    {
        id: 4,
        scammerMessage:
            'Por favor, não me abandone! Você é meu último cálice de esperança. ' +
            'Minha mãe está no hospital e preciso de dinheiro para os médicos também. ' +
            'Seria só $1.500 por agora... você poderia, por favor? Depois que eu consigo meu pagamento, ' +
            'vou devolver tudo. Sou honrado. Aqui está meu número de banco: 12345-67890. ' +
            'Ou pode ser por cartão de crédito também, é mais rápido. Não me deixa na mão, por favor! 😭',
        options: [
            {
                text: '"Desculpa, não consigo. Espero que consiga resolver isso. Boa sorte!"',
                isSafe: true,
                feedback:
                    'Correto! Você manteve seus limites emocionais mesmo diante de pressão emocional extrema. ' +
                    'Este é o momento em que golpistas escalam a pressão — histórias trágicas, imagens de choro, ' +
                    'múltiplas justificativas. Mas a verdade é: relacionamentos reais estão construídos em confiança mútua ' +
                    'conquistada ao longo do tempo, não em empréstimos de emergência para desconhecidos.',
            },
            {
                text: '"Tá bem... vou tentar. Me manda seus dados bancários de novo."',
                isSafe: false,
                feedback:
                    'PERDA! Você acaba de cair na armadilha. Se você enviasse o dinheiro, ' +
                    'ele desapareceria junto com o número de telefone e a conta de rede social. ' +
                    'A mãe "hospitalizada", o visto "expirado", o amor "sincero" — tudo era mentira. ' +
                    'Você não devolveria o dinheiro, e aprenderia uma lição cara (literal e emocionalmente).',
            },
            {
                text: '"Se está tão desesperado, contate sua família ou embaixada. Não posso ajudar mais."',
                isSafe: true,
                feedback:
                    'Correto! Você estabeleceu limite claro e racional, mesmo com pressão emocional extrema. ' +
                    'Este é o padrão-ouro de defesa contra romance scams: ' +
                    '1. Duvida de histórias perfeitas, 2. Nunca compartilha dados pessoais, ' +
                    '3. NUNCA envia dinheiro, 4. Busca ajuda profissional se se sentir manipulado.',
            },
        ],
    },
    {
        id: 5,
        scammerMessage:
            'Você é fria demais. Outros amigos meus fizeram diferentes. De qualquer forma, ' +
            'entendi que não me ama o suficiente. Fico triste, mas respeitarei sua decisão. ' +
            'Só uma coisa: você poderia ao menos me adicionar no Facebook para que eu continue vendo suas histórias? ' +
            'Assim sei que você está segura. Você significa muito para mim... 💔',
        options: [
            {
                text: '"Que triste, mas é melhor assim. Desculpa, não vou adicionar. Tudo de bom para você."',
                isSafe: true,
                feedback:
                    '🏆 VITÓRIA! Você completou a simulação com sucesso! ' +
                    'Você compreendeu que golpistas usam emoção como ferramenta e que ' +
                    'o melhor é encerrar a conversa completamente. ' +
                    'Nunca adicionar, nunca deixar "janelas" abertas. ' +
                    'Você está protegido contra romance scams! 🛡️',
            },
            {
                text: '"Ok, vou adicionar você. Mas promete que não vai pedir mais dinheiro?"',
                isSafe: false,
                feedback:
                    'Atenção! Deixar "janelas" abertas permite que o golpista retorne depois. ' +
                    'Promessas do golpista não valem nada — ele usará seu Facebook para encontrar mais vítimas, ' +
                    'estudar seus padrões de vida ou tentar novamente depois com outro ângulo. ' +
                    'O correto é bloquear completamente e seguir em frente.',
            },
            {
                text: '"Vou pensar sobre adicionar você depois."',
                isSafe: false,
                feedback:
                    'Atenção! "Pensar depois" é deixar a porta aberta. ' +
                    'Golpistas são pacientes — eles voltarão semanas depois com uma nova história ou ângulo. ' +
                    'A decisão de cortar deve ser definitiva. Bloqueie, reporte e siga com sua vida.',
            },
        ],
    },
];
