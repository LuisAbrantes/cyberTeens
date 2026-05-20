/* ================================================================
   SIMULATION-DATA-5.JS — Simulação de Falso Sorteio (Fake Giveaway)
   Um golpista oferece prêmios falsos que exigem "taxas" para liberação
   CyberTeens Academy
   ================================================================ */

const SIMULATION_STAGES_FAKE_GIVEAWAY = [
    {
        id: 1,
        scammerMessage:
            '🎉 PARABÉNS! 🎉\n\n' +
            'Você foi SORTEADO! 🍀\n\n' +
            'Você ganhou um iPhone 15 Pro Max 256GB + Apple Watch Series 9 (Valor total: R$ 18.000)\n\n' +
            'Você era um de apenas 50 selecionados entre 2 MILHÕES de seguidores! ' +
            'CLIQUE AQUI para reclamar seu prêmio agora: [link-suspeitoso.biz/claim]\n\n' +
            '⏰ Oferta válida por apenas 24 horas!\n\n' +
            'Compartilhe este post com seus amigos para que também ganhem! 🎁\n\n' +
            '— Meta Brasil Sorteios',
        options: [
            {
                text: '"Que legal! Vou clicar no link para pegar meu prêmio!"',
                isSafe: false,
                feedback:
                    'Atenção! O link provavelmente leva a um site de phishing que vai ' +
                    'roubar suas informações pessoais ou instalar malware. ' +
                    'Sorteios legítimos: 1) Você não se inscreve em "meta sorteios", ' +
                    '2) Não pedem para clicar em links aleatórios, 3) Ganham resolvem via contato direto e verificado.',
            },
            {
                text: '"Isso parece golpe. Nunca me inscrevi em nenhum sorteio."',
                isSafe: true,
                feedback:
                    'Correto! Você identificou o sinal de alerta. ' +
                    'Sorteios legítimos só sorteiam entre pessoas que se inscreveram explicitamente. ' +
                    'Se você não participou, é 100% golpe. Sorteios "virais" que não têm inscrição são SEMPRE fraude.',
            },
            {
                text: '"Vou compartilhar com meus amigos para eles também ganharem!"',
                isSafe: false,
                feedback:
                    'Atenção! Você está ajudando o golpista a espalhar a fraude. ' +
                    'O pedido para "compartilhar com amigos" é estratégia de crescimento viral barato. ' +
                    'Quanto mais pessoas compartilharem, mais vítimas em potencial o golpista encontra. ' +
                    'Nunca compartilhe links de sorteios que você não conhece a origem.',
            },
        ],
    },
    {
        id: 2,
        scammerMessage:
            'Ótimo! Você foi autenticado em nosso sistema. ✅\n\n' +
            'Para CONFIRMAR PRÊMIO e proceder com o envio, precisamos de:\n\n' +
            '1. Seu nome completo\n' +
            '2. CPF\n' +
            '3. Endereço completo\n' +
            '4. Telefone\n\n' +
            'Estas informações são APENAS para verificação de identidade ' +
            '(conforme exigência da Receita Federal). Seus dados estão 100% seguros! 🔒\n\n' +
            'Digite suas informações aqui para proceder:',
        options: [
            {
                text: '"Vou preencher tudo agora. Aqui estão meus dados..."',
                isSafe: false,
                feedback:
                    'PERIGO MÁXIMO! Você acabou de entregar informações suficientes para ' +
                    'roubo de identidade total. Com seu CPF e endereço, golpistas podem: ' +
                    '1) Abrir contas falsas em seu nome, 2) Fazer compras no crédito, ' +
                    '3) Acessar serviços financeiros, 4) Vender seus dados na dark web. ' +
                    'NUNCA forneça dados pessoais em formulários online de origem desconhecida.',
            },
            {
                text: '"Isso pede dados demais. Empresas legítimas não pedem CPF assim. Vou denunciar essa página."',
                isSafe: true,
                feedback:
                    'Correto! Você reconheceu o padrão: ' +
                    'Sorteios legítimos não pedem CPF, endereço completo, etc. em formulários online. ' +
                    'Dados sensíveis são pedidos apenas quando você oficialmente ganha ' +
                    'e por contato direto verificado. Denunciar a página é a ação certa!',
            },
            {
                text: '"Vou fornecer só o nome e telefone para ver o que acontece."',
                isSafe: false,
                feedback:
                    'Atenção! Mesmo "teste" com dados parciais é arriscado. ' +
                    'Telefone + nome já permite que golpistas façam spear phishing direcionado, ' +
                    'vendas de dados, ou até clonem seu WhatsApp. ' +
                    'Não forneça NADA para sites de origem desconhecida.',
            },
        ],
    },
    {
        id: 3,
        scammerMessage:
            'Perfeito! Seus dados foram verificados! ✅\n\n' +
            'Estamos iniciando o preparo do seu prêmio para envio!\n\n' +
            'Mas antes, precisamos que você pague uma TAXA DE SEGURANÇA ' +
            '(obrigatória conforme normas alfandegárias).\n\n' +
            '💳 TAXA DE SEGURANÇA: R$ 149,90\n\n' +
            'Você receberá os produtos (iPhone 15 + Apple Watch) no endereço cadastrado ' +
            'assim que confirmar o pagamento!\n\n' +
            'Formas de pagamento aceitas:\n' +
            '• PIX\n' +
            '• Cartão de crédito\n' +
            '• Boleto bancário\n\n' +
            'Qual prefere? Clique aqui para pagar seguramente: [link]',
        options: [
            {
                text: '"Claro! Vou pagar o PIX agora mesmo para receber meu iPhone!"',
                isSafe: false,
                feedback:
                    'VOCÊ FOI ROUBADO! Este é o desfecho do golpe. ' +
                    'Você pagou R$ 149,90 e nunca receberá nada. ' +
                    'O "iPhone" não existe, a "taxa de segurança" é a moeda da fraude. ' +
                    'Pior: se forneceu dados de cartão no site, pode ter muito mais problemas. ' +
                    'Sorteios legítimos NUNCA cobram taxa para entrega de prêmios.',
            },
            {
                text: '"Sorteios legítimos não cobram taxa. Isso é golpe total. Vou bloquear essa conta."',
                isSafe: true,
                feedback:
                    '🏆 EXCELENTE RACIOCÍNIO! Você identificou o mecanismo: ' +
                    'Golpe em 3 passos: 1) Atrair com prêmio irrecusável, ' +
                    '2) Coletar dados pessoais, 3) Cobrar "taxa" para entregar o prêmio falso. ' +
                    'Bloquear é a ação correta. Você está protegido!',
            },
            {
                text: '"Mas e se realmente for real? Se pagar só essa taxa, não perco nada..."',
                isSafe: false,
                feedback:
                    'Atenção! Este é o pensamento que os golpistas querem que você tenha. ' +
                    'Mas a realidade é: R$ 149 é TUDO que perderá? Errado. ' +
                    'Se forneceu CPF, seus dados foram vendidos (aproximadamente R$ 10 por registro na dark web). ' +
                    'E se o golpista tiver seus dados de cartão, pode cobrar mais "taxas" depois.',
            },
        ],
    },
    {
        id: 4,
        scammerMessage:
            '😱 ALERTA!\n\n' +
            'Detectamos uma tentativa de fraude em sua conta!\n\n' +
            'Sua conta foi selecionada para VERIFICAÇÃO DE SEGURANÇA URGENTE.\n\n' +
            'Para evitar bloqueio permanente da sua conta de sorteios, ' +
            'você deve verificar sua identidade AGORA:\n\n' +
            '⚠️ CLIQUE AQUI PARA VERIFICAR:\n' +
            '[link-fake-verification.net/security-check]\n\n' +
            'Você tem 2 HORAS para confirmar, caso contrário sua conta será deletada ' +
            'e seu prêmio será repassado a outro vencedor! ⏰\n\n' +
            '— Sistema de Segurança Meta Sorteios',
        options: [
            {
                text: '"Que assustador! Vou clicar para verificar minha conta urgente!"',
                isSafe: false,
                feedback:
                    'Atenção! Você caiu em uma escalação do golpe. ' +
                    'O golpista sente que você está desconfiado, então usa URGÊNCIA e MEDO. ' +
                    '"Sua conta será deletada!" é bluff para pressionar você a clicar rápido ' +
                    'sem pensar. Empresas reais não ameaçam deletar conta via link aleatório.',
            },
            {
                text: '"Isso é pressão artificial. Se fosse real, vinha de email com domínio oficial. Vou ignorar."',
                isSafe: true,
                feedback:
                    'Perfeito! Você manteve a razão sob pressão. ' +
                    'Sinais que isso é golpe: 1) Links encurtados/suspeitos, 2) Pressão de tempo artificial, ' +
                    '3) Ameaças de "deletar conta", 4) Linguagem de emergência. ' +
                    'Empresas legítimas não operam por intimidação.',
            },
            {
                text: '"Vou clicar, mas vou ter cuidado para não digitar minha senha."',
                isSafe: false,
                feedback:
                    'Atenção! Você está sendo muito otimista. Mesmo "tendo cuidado", ' +
                    'o site pode capturar outros dados (localização, tipo de dispositivo, cookies), ' +
                    'ou instalar malware que captura suas digitações depois. ' +
                    'A resposta segura é: NUNCA clique em links de origem desconhecida.',
            },
        ],
    },
    {
        id: 5,
        scammerMessage:
            'Sua conta foi verificada com sucesso! ✅\n\n' +
            'Você está a apenas UMA COISA de receber seu iPhone 15 Pro Max!\n\n' +
            'Mas precisamos de CONFIRMAÇÃO FINAL do seu endereço de entrega. ' +
            'Por favor, confirme os dados:\n\n' +
            'NOME: [dados capturados]\n' +
            'CPF: [dados capturados]\n' +
            'ENDEREÇO: [dados capturados]\n\n' +
            'E agora, para LIBERAR seu prêmio no nosso estoque, ' +
            'precisamos que você pague uma TAXA DE LIBERAÇÃO: R$ 229,90\n\n' +
            'Depois disso, seu prêmio será enviado em 24 horas! 📦\n\n' +
            'Quer pagar com PIX ou boleto? Responda rápido!',
        options: [
            {
                text: '"Não vou pagar nada. Nenhuma de minhas informações foi confirmada por mim aqui."',
                isSafe: true,
                feedback:
                    '🏆 VITÓRIA COMPLETA! Você realizou toda a simulação SEM cair em nenhuma das armadilhas! ' +
                    'Você: 1) Desconfiou da origem do sorteio, 2) Não forneceu dados reais, ' +
                    '3) Recusou pagar "taxas", 4) Resistiu à pressão de tempo. ' +
                    'Você está 100% protegido contra sorteios falsos! Parabéns! 🛡️🎉',
            },
            {
                text: '"Vou pagar essa última taxa... não pode ser que seja golpe o tempo todo."',
                isSafe: false,
                feedback:
                    'Você quase venceu, mas cansou de manter a guarda! ' +
                    'NUNCA é "a última taxa" em golpes. Cada pagamento leva a outro. ' +
                    'O padrão é: pagamento → desculpa para novo pagamento → repetir infinitamente ' +
                    'até a vítima perceber ou ficar sem dinheiro. Você foi roubado. ' +
                    'A lição: Se parece golpe, é golpe. Se pede taxa, é golpe.',
            },
            {
                text: '"Deixa eu contatar o suporte da Meta Brasil para verificar..."',
                isSafe: false,
                feedback:
                    'Atenção! Não existe "Meta Brasil Sorteios" verificável. ' +
                    'Se você tentar "contatar o suporte" através do link que forneceram, ' +
                    'você está interagindo COM O GOLPISTA NOVAMENTE. ' +
                    'A resposta correta é simplesmente: ignorar e denunciar ao Facebook/plataforma legítima.',
            },
        ],
    },
];
