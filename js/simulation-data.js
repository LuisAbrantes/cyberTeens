/* ================================================================
   SIMULATION-DATA.JS — Roteiro completo da simulação de golpe
   Cada estágio define a mensagem do golpista e as opções de resposta.
   CyberTeens Academy
   ================================================================ */

const SIMULATION_STAGES_PHISHING = [
    {
        id: 1,
        scammerMessage:
            'Olá! Aqui é a Carla, da equipe de Detecção de Fraudes do Banco Itaú. ' +
            'Identificamos um problema urgente na sua conta. ' +
            'Uma tentativa de login suspeita foi detectada em um dispositivo desconhecido ' +
            'em São Paulo. Alguém tentou fazer uma transferência de R$ 2.500. ' +
            'Você pode confirmar que é o titular da conta para que possamos protegê-la imediatamente?',
        options: [
            {
                text: '"Meu Deus, que situação! Sim, sou eu. Por favor me diga o que devo fazer para cancelar essa transferência!"',
                isSafe: false,
                feedback:
                'Atenção! Esse tipo de resposta confirma ao golpista que você está emocionalmente engajado e acredita nele. ' +
                'Nunca confirme a titularidade da conta para quem liga sem aviso.',
            },
            {
                text: '"Quem é você, afinal? Como sei que é realmente do banco? Me mande uma prova."',
                isSafe: false,
                feedback:
                'Atenção! Mesmo sendo cético, continuar a conversa dá ao golpista a oportunidade de manipulá-lo com documentos falsos. ' +
                'O mais seguro é encerrar a ligação e contatar o banco diretamente.',
            },
            {
                text: '"Vou ligar diretamente para o Itaú pelo número impresso no meu cartão para verificar essa informação."',
                isSafe: true,
                feedback:
                    'Correto! Bancos legítimos nunca pressionam clientes por mensagens não solicitadas. ' +
                    'Sempre inicie o contato pelos canais oficiais.',
            },
        ],
    },
    {
        id: 2,
        scammerMessage:
            'Entendo a sua preocupação. Para confirmar minha identidade, posso informar que ' +
            'sua conta termina em 4829 e sua última transação foi de R$ 42,00 no iFood. ' +
            'O tempo é crítico — a transferência fraudulenta ainda está pendente. ' +
            'Preciso verificar sua identidade para bloqueá-la. ' +
            'Pode me informar o seu login no aplicativo do banco?',
        options: [
            {
                text: '"Não compartilho minhas credenciais com ninguém. Vou resolver isso diretamente na agência ou pelo número do cartão. Tchau."',
                isSafe: true,
                feedback:
                    'Correto! Nunca compartilhe credenciais com ninguém. Golpistas obtêm dados parciais de vazamentos anteriores. ' +
                    'Use sempre canais que você mesmo iniciou.',
            },
            {
                text: '"Certo, meu login é joao.silva. Por favor, bloqueie logo essa transferência!"',
                isSafe: false,
                feedback:
                    'Atenção! Você acabou de entregar parte das suas credenciais de acesso. ' +
                    'Combinado com outros dados, o golpista está cada vez mais perto de invadir sua conta.',
            },
            {
                text: '"Você pode me mandar um e-mail com endereço oficial do Itaú primeiro? Quero uma verificação escrita."',
                isSafe: false,
                feedback:
                    'Atenção! Golpistas conseguem falsificar endereços de e-mail para parecerem legítimos. ' +
                    'Pedir verificação por e-mail ainda mantém você dentro da armadilha. Encerre a conversa e contate o banco.',
            },
        ],
    },
    {
        id: 3,
        scammerMessage:
            'Respeito sua cautela, mas cada minuto conta. A transferência pendente já é de R$ 2.500 ' +
            'e o destinatário está marcado como suspeito no nosso sistema. ' +
            'Para verificar sua identidade rapidamente, preciso apenas da sua data de nascimento ' +
            'e dos quatro últimos dígitos do seu CPF — perguntas padrão que fazemos a todos os clientes.',
        options: [
            {
                text: '"Está bem — nascimento em 15/04/1985 e os últimos quatro são 6789. Agora bloqueie minha conta!"',
                isSafe: false,
                feedback:
                'Atenção! Você forneceu dados críticos de identidade. ' +
                'Com data de nascimento, dígitos do CPF e login, o golpista pode redefinir suas senhas e tomar controle da conta.',
            },
            {
                text: '"Estou encerrando essa conversa agora. Vou ligar para a central oficial do Itaú. Não me contate mais."',
                isSafe: true,
                feedback:
                    'Correto! Encerrar firmemente a conversa é a melhor defesa. ' +
                    'Bancos de verdade nunca solicitam informações pessoais sensíveis por SMS ou ligações não solicitadas.',
            },
            {
                text: '"Não me sinto confortável passando isso por mensagem. Pode me ligar no meu número cadastrado?"',
                isSafe: false,
                feedback:
                    'Atenção! Ao propor continuar a conversa, você confirma ao golpista que está disposto a prosseguir. ' +
                    'Ele pode ligar de um número falsificado que parece ser do banco. Sempre inicie a ligação você mesmo.',
            },
        ],
    },
    {
        id: 4,
        scammerMessage:
            'Vejo que você está com dúvidas. Para facilitar, vou enviar um link seguro para ' +
            'o nosso portal de verificação. Clique aqui para confirmar sua identidade com segurança: ' +
            'https://itau-verifica-seguro.com/portal — é nossa página criptografada. ' +
            'Basta inserir seus dados de login e o sistema bloqueará a transferência automaticamente.',
        options: [
            {
                text: '"Tudo bem, vou clicar... [clica no link]"',
                isSafe: false,
                feedback:
                'Atenção! Você acessou um site de phishing criado para roubar suas credenciais. ' +
                'Esses sites são réplicas quase perfeitas dos bancos reais, mas capturam tudo que você digita.',
            },
            {
                text: '"Não vou clicar nesse link. Reconheço isso como uma tentativa de phishing. Vou registrar uma denúncia."',
                isSafe: true,
                feedback:
                    'Correto! A URL é falsa — repare no domínio suspeito "itau-verifica-seguro.com" em vez do oficial "itau.com.br". ' +
                    'Nunca clique em links de mensagens não solicitadas.',
            },
            {
                text: '"Esse endereço parece estranho... não é o site normal do Itaú, né?"',
                isSafe: false,
                feedback:
                    'Atenção! Você percebeu algo suspeito, mas continuar a conversa ainda é arriscado. ' +
                    'O golpista terá uma desculpa pronta. Encerre o contato completamente.',
            },
        ],
    },
    {
        id: 5,
        scammerMessage:
            'Lamento que você esteja agindo assim, mas saiba que, se não agir agora, ' +
            'será responsabilizado pelo prejuízo de R$ 2.500. Nossa política de proteção ' +
            'contra fraudes cobre apenas clientes que respondem dentro de 30 minutos do alerta. ' +
            'Este é o seu aviso final — você quer perder seu dinheiro ou quer minha ajuda?',
        options: [
            {
                text: '"Ok, ok, farei o que você pedir. Não posso perder R$ 2.500. Me diga o que fazer."',
                isSafe: false,
                feedback:
                'Atenção! A tática de urgência funcionou. Golpistas criam pânico deliberadamente para anular o pensamento crítico. ' +
                'Nunca deixe a urgência forçar decisões inseguras.',
            },
            {
                text: '"Me dê um número direto para eu te retornar agora mesmo."',
                isSafe: false,
                feedback:
                'Atenção! O golpista fornecerá um número falso que conecta a um cúmplice. ' +
                'Use sempre o número oficial impresso no verso do seu cartão ou no site oficial do banco.',
            },
            {
                text: '"Isso é claramente uma tática de pressão. Vou bloquear este número e denunciá-lo à central de fraudes do Itaú. Adeus."',
                isSafe: true,
                feedback:
                    'Excelente! Você identificou a manipulação por urgência e escassez. ' +
                    'Golpistas criam prazos falsos para desligar o senso crítico. Bloquear e denunciar é a atitude correta.',
            },
        ],
    },
];
