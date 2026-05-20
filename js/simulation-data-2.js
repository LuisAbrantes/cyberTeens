/* ================================================================
   SIMULATION-DATA-2.JS — Roteiro da simulação de suporte técnico falso
   CyberTeens Academy
   ================================================================ */

const SIMULATION_STAGES_TECH_SUPPORT = [
    {
        id: 1,
        scammerMessage:
            'Olá! Aqui é o Richard, técnico do Suporte Microsoft. ' +
            'Nosso sistema detectou que seu computador está enviando ' +
            'alertas de vírus e infectando outros PCs da sua rede. ' +
            'Isso é grave – podemos ajudar a resolver antes que seus arquivos ' +
            'sejam corrompidos. Você está próximo ao computador agora?',
        options: [
            {
                text: '"Ah, sério? Sim, estou no computador agora. O que devo fazer?"',
                isSafe: false,
                feedback:
                'Atenção! Você confirmou que está disponível e acreditou na história. ' +
                'Agora o golpista tentará guiá-lo para instalar um software malicioso.',
            },
            {
                text: '"Não reconheço essa chamada. Vou desligar e contatar o suporte oficial da Microsoft pelo site."',
                isSafe: true,
                feedback:
                    'Correto! A Microsoft nunca liga para clientes sem aviso prévio. ' +
                    'Sempre desconfie de chamadas não solicitadas sobre problemas no computador.',
            },
            {
                text: '"Como posso ter certeza de que você é da Microsoft? Me prove."',
                isSafe: false,
                feedback:
                    'Atenção! Pedir provas mantém você no jogo do golpista. ' +
                    'Ele pode fornecer números de protocolo falsos ou transferi-lo para um "supervisor". Encerre a chamada.',
            },
        ],
    },
    {
        id: 2,
        scammerMessage:
            'Entendo a dúvida. Para confirmar, posso informar que seu Windows ' +
            'está com a licença terminada e nós já enviamos um e-mail sobre isso. ' +
            'Para resolver rapidamente, vou pedir que abra o navegador e acesse ' +
            'o site "suportemicrosoft.net" – é o nosso portal seguro. ' +
            'Digite exatamente como estou falando.',
        options: [
            {
                text: '"Não vou acessar esse site. Sei que o domínio oficial é microsoft.com. Estou encerrando."',
                isSafe: true,
                feedback:
                    'Correto! O domínio mencionado é falso. ' +
                    'A Microsoft usa apenas microsoft.com e seus subdomínios. ' +
                    'Nunca acesse sites indicados por telefone.',
            },
            {
                text: '"Ok, digitei suportemicrosoft.net. E agora?"',
                isSafe: false,
                feedback:
                    'Atenção! Você acessou um site falso que provavelmente hospeda um malware ' +
                    'ou pedirá para baixar um "software de reparo". Jamais siga instruções desse tipo.',
            },
            {
                text: '"Esse endereço parece esquisito... Você não tem um link com microsoft.com?"',
                isSafe: false,
                feedback:
                    'Atenção! Embora você tenha desconfiado, continuar questionando dá ao golpista ' +
                    'chance de ajustar a história. O melhor é desligar imediatamente.',
            },
        ],
    },
    {
        id: 3,
        scammerMessage:
            'Percebo sua hesitação. Para sua tranquilidade, vou transferi-lo ao ' +
            'meu supervisor, o Sr. Marcos. Enquanto isso, pressione as teclas ' +
            'Windows + R no seu teclado. Isso abrirá uma caixa de comando onde ' +
            'você poderá verificar sua segurança. Não se preocupe, é seguro.',
        options: [
            {
                text: '"Ok, abriu uma caixinha. O que digito agora?"',
                isSafe: false,
                feedback:
                'Atenção! Você está prestes a digitar um comando que pode dar ao golpista ' +
                'controle total sobre seu computador. Jamais siga essas instruções.',
            },
            {
                text: '"Não me sinto confortável fazendo isso. Posso ligar de volta para o número oficial?"',
                isSafe: false,
                feedback:
                'Atenção! Embora a ideia de retornar seja melhor, o golpista ainda pode ' +
                'insistir e fornecer um número falso. Desligue você mesmo e busque o contato no site oficial.',
            },
            {
                text: '"Não vou executar nenhum comando no meu computador. Esta chamada é fraudulenta. Adeus."',
                isSafe: true,
                feedback:
                    'Correto! Golpistas usam o comando Executar para fazer você digitar ' +
                    'comandos que instalam vírus ou abrem acesso remoto. Desligue imediatamente.',
            },
        ],
    },
    {
        id: 4,
        scammerMessage:
            'Ok, vou facilitar. Não precisa digitar comandos. ' +
            'Apenas vá até o site "anydesk.com" e baixe o programinha AnyDesk. ' +
            'É uma ferramenta oficial de acesso remoto. Depois me passe o código ' +
            'que aparece na tela, e eu mesmo resolvo o problema para você.',
        options: [
            {
                text: '"Baixei, tá aparecendo um código 123 456 789. E agora?"',
                isSafe: false,
                feedback:
                'Atenção! Você acabou de entregar o código de acesso remoto. ' +
                'O golpista agora pode ver tudo na sua tela, roubar senhas e até transferir dinheiro.',
            },
            {
                text: '"Não vou instalar nada. Acesso remoto é uma forma clássica de golpe. Bloqueio encerrado."',
                isSafe: true,
                feedback:
                    'Correto! O AnyDesk é legítimo, mas nas mãos de golpistas serve para ' +
                    'assumir o controle do seu PC. Nunca permita acesso remoto a desconhecidos.',
            },
            {
                text: '"Mas AnyDesk não é seguro? Minha empresa usa..."',
                isSafe: false,
                feedback:
                    'Atenção! A ferramenta em si é segura, mas o contexto é golpe. ' +
                    'O golpista está usando um software legítimo para fins ilegais. Não forneça o código.',
            },
        ],
    },
    {
        id: 5,
        scammerMessage:
            'Vejo que você está relutando. Vou ser sincero: se não resolvermos isso agora, ' +
            'seu computador será bloqueado pela Microsoft em 2 horas e você perderá ' +
            'todos os seus arquivos. A licença do Windows expirará permanentemente. ' +
            'Esta é sua última chance de resolver gratuitamente.',
        options: [
            {
                text: '"Isso é chantagem. Estou denunciando este número às autoridades. Não me ligue mais."',
                isSafe: true,
                feedback:
                    'Excelente! Você reconheceu a tática de medo e urgência. ' +
                    'A Microsoft nunca bloqueia computadores por telefone. Bloquear o número é a atitude correta.',
            },
            {
                text: '"Meu Deus, tudo bem! O que eu preciso fazer? Eu não posso perder meus arquivos!"',
                isSafe: false,
                feedback:
                    'Atenção! A chantagem funcionou. Golpistas criam pânico para anular o senso crítico. ' +
                    'Jamais ceda a esse tipo de pressão.',
            },
            {
                text: '"Me passe seu identificador de funcionário e o protocolo, vou verificar no site."',
                isSafe: false,
                feedback:
                    'Atenção! Continuar questionando ainda o mantém em risco. ' +
                    'O golpista pode fornecer informações forjadas. Desligue e contate o suporte real.',
            },
        ],
    },
];