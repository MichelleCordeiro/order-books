import autores from "./autores"

const series = [
  {
    id: 'harry-potter',
    titulo: 'Harry Potter',
    descricao:
      'A série de livros Harry Potter, escrita por J.K. Rowling, segue a jornada de um jovem bruxo, Harry Potter, enquanto ele descobre seu lugar no mundo mágico e enfrenta desafios para derrotar o malvado bruxo Lord Voldemort. Ao longo de sete livros, Harry e seus amigos, Hermione Granger e Ron Weasley, exploram a magia, enfrentam perigos e aprendem sobre amizade, coragem e o poder da escolha em uma luta épica entre o bem e o mal.',
    autor: autores[0],
    ano: 1997,
    imagem:
      'https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/2549/7ababc2015043445b750ebc853a5f706.jpg',
    livros: [
      {
        id: 'harry-potter-e-a-pedra-filosofal',
        titulo: 'Harry Potter e a Pedra Filosofal',
        autor: autores[0],
        ano: 1997,
        ordem: 1,
        imagem: 'https://m.media-amazon.com/images/I/81pB+joKL4L._SL1500_.jpg',
        link: 'https://www.amazon.com.br/gp/product/B01LQM96G4?ref_=dbs_p_pwh_rwt_anx_cl_0&storeType=ebooks'
      },
      {
        id: 'harry-potter-e-a-camara-secreta',
        titulo: 'Harry Potter e a Câmara Secreta',
        autor: autores[0],
        ano: 1998,
        ordem: 2,
        imagem: 'https://m.media-amazon.com/images/I/81D+5aMHzFL._SL1500_.jpg',
        link: 'https://www.amazon.com.br/gp/product/B01LQM96K0?ref_=dbs_p_pwh_rwt_anx_cl_1&storeType=ebooks'
      },
      {
        id: 'harry-potter-e-o-prisioneiro-de-azkaban',
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: autores[0],
        ano: 1999,
        ordem: 3,
        imagem: 'https://m.media-amazon.com/images/I/81Q+2zleuwL._SL1500_.jpg',
        link: 'https://www.amazon.com.br/gp/product/B01LQM96HI?ref_=dbs_p_pwh_rwt_anx_cl_2&storeType=ebooks'
      },
      {
        id: 'harry-potter-e-o-calice-de-fogo',
        titulo: 'Harry Potter e o Cálice de Fogo',
        autor: autores[0],
        ano: 2000,
        ordem: 4,
        imagem: 'https://m.media-amazon.com/images/I/81IsnaNraBL._SL1500_.jpg',
        link: 'https://www.amazon.com.br/gp/product/B01LQM96FA?ref_=dbs_p_pwh_rwt_anx_cl_3&storeType=ebooks'
      },
      {
        id: 'harry-potter-e-a-ordem-da-fenix',
        titulo: 'Harry Potter e a Ordem da Fênix',
        autor: autores[0],
        ano: 2003,
        ordem: 5,
        imagem: 'https://m.media-amazon.com/images/I/81ZQUV67MGL._SL1500_.jpg',
        link: 'https://www.amazon.com.br/gp/product/B01LQM96IC?ref_=dbs_p_pwh_rwt_anx_cl_4&storeType=ebooks'
      },
      {
        id: 'harry-potter-e-o-enigma-do-principe',
        titulo: 'Harry Potter e o Enigma do Príncipe',
        autor: autores[0],
        ano: 2005,
        ordem: 6,
        imagem: 'https://m.media-amazon.com/images/I/81SZC96OGOL._SL1500_.jpg',
        link: 'https://www.amazon.com.br/gp/product/B01LQM96LY?notRedirectToSDP=1&ref_=dbs_mng_calw_5&storeType=ebooks'
      },
      {
        id: 'Harry Potter e as Reliquias da Morte',
        titulo: 'Harry Potter e as Relíquias da Morte',
        autor: autores[0],
        ano: 2007,
        ordem: 7,
        imagem: 'https://m.media-amazon.com/images/I/81PbdwXqKkL._SL1500_.jpg',
        link: 'https://www.amazon.com.br/gp/product/B01LQM96GE?notRedirectToSDP=1&ref_=dbs_mng_calw_6&storeType=ebooks'
      },
      {
        id: 'harry-potter-e-a-crianca-amaldicoada',
        titulo: 'Harry Potter e a Criança Amaldiçoada',
        autor: autores[0],
        ano: 2016,
        ordem: 8,
        imagem: 'https://rocco.com.br/app/uploads/2024/04/9786555322682.jpg',
        link: 'https://www.amazon.com.br/Harry-Potter-Crian%C3%A7a-Amaldi%C3%A7oada-Parte/dp/8532530435'
      }
    ]
  },
  {
    id: 'o-senhor-dos-aneis',
    titulo: 'O Senhor dos Anéis',
    descricao:
      'A trilogia O Senhor dos Anéis, escrita por J.R.R. Tolkien, narra a aventura épica de Frodo Bolseiro, um hobbit que recebe a missão de destruir o poderoso Anel do Poder e impedir que ele caia nas mãos do sombrio Senhor Sauron. Acompanhado por um grupo diverso de heróis, Frodo enfrenta batalhas, perigos sobrenaturais e tentações, em uma jornada que explora temas de coragem, sacrifício e amizade. A história celebra a luta do bem contra o mal em um vasto e detalhado mundo de fantasia, a Terra-média.',
    autor: autores[1],
    ano: 1954,
    imagem:
      'https://desprookjeswinkel.be/cdn/shop/collections/33df73432610f44dc8e8ba7c5f18c299_3fc81c03-2296-473c-9f6a-d70937015f00.jpg?v=1723674924&width=1000',
    livros: [
      {
        id: 'a-sociedade-do-anel',
        titulo: 'A Sociedade do Anel',
        autor: autores[1],
        ano: 1954,
        ordem: 1,
        imagem: 'https://m.media-amazon.com/images/I/81SM0D5+DwL._SL1500_.jpg',
        link: 'https://www.amazon.com.br/gp/product/B0B3C98K98?ref_=dbs_p_pwh_rwt_cpsb_cl_0&storeType=ebooks'
      },
      {
        id: 'as-duas-torres',
        titulo: 'As Duas Torres',
        autor: autores[1],
        ano: 1954,
        ordem: 2,
        imagem: 'https://m.media-amazon.com/images/I/81N9hxO6XdL._SL1500_.jpg',
        link: 'https://www.amazon.com.br/gp/product/B0B3CCH4XF?ref_=dbs_p_pwh_rwt_cpsb_cl_1&storeType=ebooks'
      },
      {
        id: 'o-retorno-do-rei',
        titulo: 'O Retorno do Rei',
        autor: autores[1],
        ano: 1955,
        ordem: 3,
        imagem: 'https://m.media-amazon.com/images/I/81LUEEYfQNL._SL1500_.jpg',
        link: 'https://www.amazon.com.br/gp/product/B0B3D2GFXN?ref_=dbs_p_pwh_rwt_cpsb_cl_2&storeType=ebooks'
      }
    ]
  },
  {
    id: 'as-cronicas-de-gelo-e-fogo',
    titulo: 'As Crônicas de Gelo e Fogo',
    descricao:
      'As Crônicas de Gelo e Fogo, série escrita por George R.R. Martin, acompanha a luta pelo Trono de Ferro em Westeros, um continente marcado por rivalidades, alianças e traições. Nobres famílias, como os Starks, Lannisters e Targaryens, jogam um perigoso jogo de intrigas, onde poder e sobrevivência andam lado a lado. Enquanto reis e rainhas disputam o controle dos Sete Reinos, uma antiga ameaça cresce ao norte, e o inverno se aproxima, trazendo consigo o perigo dos Caminhantes Brancos. A série explora temas de poder, lealdade e moralidade em uma narrativa complexa e repleta de reviravoltas.',
    autor: autores[2],
    ano: 1996,
    imagem: 'https://img.odcdn.com.br/wp-content/uploads/2024/07/Design-sem-nome-16-1-scaled.jpg',
    livros: [
      {
        id: 'a-guerra-dos-tronos',
        titulo: 'A Guerra dos Tronos',
        autor: autores[2],
        ano: 1996,
        ordem: 1,
        imagem: 'https://m.media-amazon.com/images/I/91eHityofNL._SL1500_.jpg',
        link: 'https://www.amazon.com.br/gp/product/B07PPB9QW1?ref_=dbs_p_pwh_rwt_anx_cl_0&storeType=ebooks'
      },
      {
        id: 'a-furia-dos-reis',
        titulo: 'A Fúria dos Reis',
        autor: autores[2],
        ano: 1998,
        ordem: 2,
        imagem: 'https://m.media-amazon.com/images/I/91N6C0jwzuL._SL1500_.jpg',
        link: 'https://www.amazon.com.br/gp/product/B07QYPLKV1?ref_=dbs_p_pwh_rwt_anx_cl_1&storeType=ebooks'
      },
      {
        id: 'a-tormenta-de-espadas',
        titulo: 'A Tormenta de Espadas',
        autor: autores[2],
        ano: 2000,
        ordem: 3,
        imagem: 'https://m.media-amazon.com/images/I/91VVZ-v5GYL._SL1500_.jpg',
        link: 'https://www.amazon.com.br/gp/product/B07QXSYDSB?ref_=dbs_p_pwh_rwt_anx_cl_2&storeType=ebooks'
      },
      {
        id: 'o-festim-dos-corvos',
        titulo: 'O Festim dos Corvos',
        autor: autores[2],
        ano: 2019,
        ordem: 4,
        imagem: 'https://m.media-amazon.com/images/I/814UZhEYFfL._SL1500_.jpg',
        link: 'https://www.amazon.com.br/gp/product/B081284MLJ?notRedirectToSDP=1&ref_=dbs_mng_calw_3&storeType=ebooks'
      },
      {
        id: 'a-danca-dos-dragoes',
        titulo: 'A Dança dos Dragões',
        autor: autores[2],
        ano: 2020,
        ordem: 5,
        imagem: 'https://m.media-amazon.com/images/I/91DisjRjFxL._SL1500_.jpg',
        link: 'https://www.amazon.com.br/gp/product/B084SS25D3?notRedirectToSDP=1&ref_=dbs_mng_calw_4&storeType=ebooks'
      }
    ]
  },
  {
    id: 'sherlock-holmes',
    titulo: 'Sherlock Holmes',
    descricao:
      'A série de livros de Sherlock Holmes, escrita por Arthur Conan Doyle, segue as investigações do brilhante detetive Sherlock Holmes e seu fiel amigo e cronista, Dr. John Watson. Ambientadas na Londres vitoriana, as histórias destacam as incríveis habilidades dedutivas de Holmes, que resolve os mais variados e intrigantes casos criminais, desvendando mistérios que desafiam a lógica comum. A série explora temas de inteligência, amizade e moralidade, consolidando Holmes como um dos personagens literários mais icônicos de todos os tempos.',
    autor: autores[12],
    ano: 1887,
    imagem:
      'https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/66757b38e22aab001ef9a1e3.jpg',
    livros: [
      {
        id: 'um-estudo-em-vermelho',
        titulo: 'Um Estudo em Vermelho',
        autor: autores[12],
        ano: 1887,
        ordem: 1,
        imagem: 'https://m.media-amazon.com/images/I/81IXqlvKH9L.jpg',
        link: 'https://www.amazon.com.br/dp/B00IKZPZ0W'
      },
      {
        id: 'o-sinal-dos-quatro',
        titulo: 'O Sinal dos Quatro',
        autor: autores[12],
        ano: 1890,
        ordem: 2,
        imagem: 'https://m.media-amazon.com/images/I/81c6PfzZwDL.jpg',
        link: 'https://www.amazon.com.br/dp/B00IKZPZZS'
      },
      {
        id: 'o-cao-dos-baskervilles',
        titulo: 'O Cão dos Baskervilles',
        autor: autores[12],
        ano: 1902,
        ordem: 3,
        imagem: 'https://m.media-amazon.com/images/I/91DyeU7W1GL.jpg',
        link: 'https://www.amazon.com.br/dp/B00IKZQ02W'
      },
      {
        id: 'o-vale-do-medo',
        titulo: 'O Vale do Medo',
        autor: autores[12],
        ano: 1915,
        ordem: 4,
        imagem: 'https://m.media-amazon.com/images/I/81oVrB+gMrL.jpg',
        link: 'https://www.amazon.com.br/dp/B00IKZQ02X'
      }
    ]
  },
  {
    id: 'as-cronicas-de-narnia',
    titulo: 'As Crônicas de Nárnia',
    descricao:
      'Escrita por C.S. Lewis, "As Crônicas de Nárnia" é uma série de fantasia composta por sete livros, que narram as aventuras de crianças no reino mágico de Nárnia, onde animais falam, magia é real, e batalhas épicas entre o bem e o mal acontecem. Guiadas pelo leão Aslam, as histórias exploram temas de coragem, amizade, redenção e a luta entre a luz e as trevas, em um mundo repleto de maravilhas e perigos.',
    autor: autores[8],
    ano: 1950,
    imagem:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibOwwmxWRd36twlExvUhJxruHSfLQZfbAbRozZWZEgacPnD8eb9TI3_-mQWfrLeCOwqX65QqkGmRbmKHFjaFOf87Vbn-W2_UV4w4xdKTTDwuXXtPKYaKvyRotmBfdQJjw_RFTPrvqMJfCS/w1200-h630-p-k-no-nu/as-cr%25C3%25B4nicas-de-n%25C3%25A1rniacapa.jpg',
    livros: [
      {
        id: 'o-sobrinho-do-mago',
        titulo: 'O Sobrinho do Mago',
        autor: autores[8],
        ano: 1955,
        ordem: 1,
        imagem: 'https://m.media-amazon.com/images/I/91sz3gGH7cL.jpg',
        link: 'https://www.amazon.com.br/dp/B008Y8TGB8'
      },
      {
        id: 'o-leao-a-feiticeira-e-o-guarda-roupa',
        titulo: 'O Leão, a Feiticeira e o Guarda-Roupa',
        autor: autores[8],
        ano: 1950,
        ordem: 2,
        imagem: 'https://m.media-amazon.com/images/I/91z4b0kSW+L.jpg',
        link: 'https://www.amazon.com.br/dp/B008Y8TFZ8'
      },
      {
        id: 'o-cavalo-e-seu-menino',
        titulo: 'O Cavalo e Seu Menino',
        autor: autores[8],
        ano: 1954,
        ordem: 3,
        imagem: 'https://m.media-amazon.com/images/I/81nhzApSc-L.jpg',
        link: 'https://www.amazon.com.br/dp/B008Y8TFVG'
      },
      {
        id: 'principe-caspian',
        titulo: 'Príncipe Caspian',
        autor: autores[8],
        ano: 1951,
        ordem: 4,
        imagem: 'https://m.media-amazon.com/images/I/81og2U58Y4L.jpg',
        link: 'https://www.amazon.com.br/dp/B008Y8TGBW'
      },
      {
        id: 'a-viagem-do-peregrino-da-alvorada',
        titulo: 'A Viagem do Peregrino da Alvorada',
        autor: autores[8],
        ano: 1952,
        ordem: 5,
        imagem: 'https://m.media-amazon.com/images/I/81GnKmF6uXL.jpg',
        link: 'https://www.amazon.com.br/dp/B008Y8TGBN'
      },
      {
        id: 'a-cadeira-de-prata',
        titulo: 'A Cadeira de Prata',
        autor: autores[8],
        ano: 1953,
        ordem: 6,
        imagem: 'https://m.media-amazon.com/images/I/81a-Q5M6-xL.jpg',
        link: 'https://www.amazon.com.br/dp/B008Y8TFZY'
      },
      {
        id: 'a-ultima-batalha',
        titulo: 'A Última Batalha',
        autor: autores[8],
        ano: 1956,
        ordem: 7,
        imagem: 'https://m.media-amazon.com/images/I/91g-QhUOTvL.jpg',
        link: 'https://www.amazon.com.br/dp/B008Y8TGBG'
      }
    ]
  },
  {
    id: 'hitchhikers-guide',
    titulo: 'O Guia do Mochileiro das Galáxias',
    descricao:
      'A série "O Guia do Mochileiro das Galáxias", escrita por Douglas Adams, é uma obra de ficção científica repleta de humor e sátira, que acompanha as desventuras de Arthur Dent, um terráqueo que, após a destruição da Terra, embarca em uma viagem intergaláctica com o excêntrico Ford Prefect, um amigo alienígena, e outros personagens peculiares. A série explora temas como a busca por sentido na vida, a natureza do universo e a absurda complexidade da existência, sempre com um tom irreverente e irreverente.',
    autor: autores[4],
    ano: 1979,
    imagem:
      'https://i0.wp.com/maisqinerds.com/wp-content/uploads/2016/05/Untitled-collage-88.jpg?resize=1140%2C470',
    livros: [
      {
        id: 'o-guia-do-mochileiro-das-galaxias',
        titulo: 'O Guia do Mochileiro das Galáxias',
        autor: autores[4],
        ano: 1979,
        ordem: 1,
        imagem: 'https://m.media-amazon.com/images/I/81Z0eZKFr9L.jpg',
        link: 'https://www.amazon.com.br/dp/B004J4W9LO'
      },
      {
        id: 'o-restaurante-ambientado-no-fim-do-universo',
        titulo: 'O Restaurante no Fim do Universo',
        autor: autores[4],
        ano: 1980,
        ordem: 2,
        imagem: 'https://m.media-amazon.com/images/I/81c2fzdtptL.jpg',
        link: 'https://www.amazon.com.br/dp/B004J4W9K4'
      },
      {
        id: 'a-vida-o-universo-e-tudo-mais',
        titulo: 'A Vida, o Universo e Tudo Mais',
        autor: autores[4],
        ano: 1982,
        ordem: 3,
        imagem: 'https://m.media-amazon.com/images/I/81hmEF7g7qL.jpg',
        link: 'https://www.amazon.com.br/dp/B004J4W9L6'
      },
      {
        id: 'só-mais-um-episodio',
        titulo: 'Só Mais um Episódio',
        autor: autores[4],
        ano: 1987,
        ordem: 4,
        imagem: 'https://m.media-amazon.com/images/I/81zqOZjVwPL.jpg',
        link: 'https://www.amazon.com.br/dp/B004J4W9L9'
      },
      {
        id: 'praticamente-inofensiva',
        titulo: 'Praticamente Inofensiva',
        autor: autores[4],
        ano: 1992,
        ordem: 5,
        imagem: 'https://m.media-amazon.com/images/I/91ByGlpaZ2L.jpg',
        link: 'https://www.amazon.com.br/dp/B004J4W9MA'
      }
    ]
  },
  {
    id: 'duna',
    titulo: 'Duna',
    descricao:
      'A série "Duna", escrita por Frank Herbert, é uma das mais influentes da ficção científica, centrada em um futuro distante, no planeta desértico Arrakis. A série explora temas de política, religião, ecologia e o poder, narrando a história de Paul Atreides, um jovem que se vê envolvido em intrigas dinásticas e em uma batalha pelo controle de Arrakis, o único planeta que produz a "melange", uma especiaria preciosa. A série examina as complexas relações entre o destino pessoal e o controle do poder em um universo vasto e detalhado.',
    autor: autores[3],
    ano: 1965,
    imagem: 'https://www.legiaojovem.com.br/wp-content/uploads/2020/09/duna-destaque.jpg',
    livros: [
      {
        id: 'duna',
        titulo: 'Duna',
        autor: autores[3],
        ano: 1965,
        ordem: 1,
        imagem: 'https://m.media-amazon.com/images/I/81Q98s-8oTL.jpg',
        link: 'https://www.amazon.com.br/dp/B00C9L62W0'
      },
      {
        id: 'messias-de-duna',
        titulo: 'Messias de Duna',
        autor: autores[3],
        ano: 1969,
        ordem: 2,
        imagem: 'https://m.media-amazon.com/images/I/81Uo1OExflL.jpg',
        link: 'https://www.amazon.com.br/dp/B00C9L62Z4'
      },
      {
        id: 'filhos-de-duna',
        titulo: 'Filhos de Duna',
        autor: autores[3],
        ano: 1976,
        ordem: 3,
        imagem: 'https://m.media-amazon.com/images/I/81X9l5rKfdL.jpg',
        link: 'https://www.amazon.com.br/dp/B00C9L62ZK'
      },
      {
        id: 'deus-em-duna',
        titulo: 'Deus Em Duna',
        autor: autores[3],
        ano: 1981,
        ordem: 4,
        imagem: 'https://m.media-amazon.com/images/I/91J9lbVuDQL.jpg',
        link: 'https://www.amazon.com.br/dp/B00C9L62ZC'
      },
      {
        id: 'hereticus-de-duna',
        titulo: 'Hereticus de Duna',
        autor: autores[3],
        ano: 1984,
        ordem: 5,
        imagem: 'https://m.media-amazon.com/images/I/91X75HZBQvL.jpg',
        link: 'https://www.amazon.com.br/dp/B00C9L62YY'
      },
      {
        id: 'capitulos-de-duna',
        titulo: 'Capítulos de Duna',
        autor: autores[3],
        ano: 1985,
        ordem: 6,
        imagem: 'https://m.media-amazon.com/images/I/91ygqYN8G5L.jpg',
        link: 'https://www.amazon.com.br/dp/B00C9L62ZG'
      }
    ]
  },
  {
    id: 'percy-jackson',
    titulo: 'Percy Jackson e os Olimpianos',
    descricao:
      'A série "Percy Jackson e os Olimpianos", escrita por Rick Riordan, mistura mitologia grega com aventuras modernas. A trama segue Percy Jackson, um semideus, filho de Poseidon, enquanto descobre sua verdadeira identidade e embarca em missões perigosas para proteger o mundo dos deuses e monstros da mitologia. Repleta de humor, ação e lições de amizade e coragem, a série apresenta a mitologia de maneira acessível e envolvente para jovens leitores.',
    autor: autores[7],
    ano: 2005,
    imagem:
      'https://www.sky.de/static/img/filmhighlights/sky_1606_percy-jackson-diebe-im-olymp.jpg',
    livros: [
      {
        id: 'o-ladrao-de-raios',
        titulo: 'O Ladrão de Raios',
        autor: autores[7],
        ano: 2005,
        ordem: 1,
        imagem: 'https://m.media-amazon.com/images/I/81+llBCRsfL.jpg',
        link: 'https://www.amazon.com.br/dp/B00B6EBX8E'
      },
      {
        id: 'o-mar-de-monstros',
        titulo: 'O Mar de Monstros',
        autor: autores[7],
        ano: 2006,
        ordem: 2,
        imagem: 'https://m.media-amazon.com/images/I/81OhqgJ0nQL.jpg',
        link: 'https://www.amazon.com.br/dp/B00B6EBZ3U'
      },
      {
        id: 'a-maldicao-do-tita',
        titulo: 'A Maldição do Titã',
        autor: autores[7],
        ano: 2007,
        ordem: 3,
        imagem: 'https://m.media-amazon.com/images/I/81m+bxHn9TL.jpg',
        link: 'https://www.amazon.com.br/dp/B00B6EBZ6A'
      },
      {
        id: 'a-batalha-do-labirinto',
        titulo: 'A Batalha do Labirinto',
        autor: autores[7],
        ano: 2008,
        ordem: 4,
        imagem: 'https://m.media-amazon.com/images/I/81hOdWuXY1L.jpg',
        link: 'https://www.amazon.com.br/dp/B00B6EBZ7M'
      },
      {
        id: 'o-ultimo-olimpiano',
        titulo: 'O Último Olimpiano',
        autor: autores[7],
        ano: 2009,
        ordem: 5,
        imagem: 'https://m.media-amazon.com/images/I/81tE2P8DBLL.jpg',
        link: 'https://www.amazon.com.br/dp/B00B6EBZ8X'
      }
    ]
  },
  {
    id: 'jogos-vorazes',
    titulo: 'Jogos Vorazes',
    descricao:
      'A série "Jogos Vorazes", escrita por Suzanne Collins, é ambientada em um futuro distópico no país de Panem, onde um governo autoritário organiza anualmente uma competição mortal para manter a população sob controle. A história segue Katniss Everdeen, uma jovem de espírito forte que se torna um símbolo de resistência após se voluntariar para substituir sua irmã nos Jogos Vorazes. Combinando ação, drama e críticas sociais, a série explora temas como opressão, desigualdade e a luta pela liberdade.',
    autor: autores[5],
    ano: 2008,
    imagem: 'https://i.pinimg.com/originals/e5/78/d7/e578d7555ba1e2e1e862a8b60cbd7e03.jpg',
    livros: [
      {
        id: 'jogos-vorazes',
        titulo: 'Jogos Vorazes',
        autor: autores[5],
        ano: 2008,
        ordem: 1,
        imagem: 'https://m.media-amazon.com/images/I/91-+DW9DEOL.jpg',
        link: 'https://www.amazon.com.br/dp/B003P2WU40'
      },
      {
        id: 'em-chamas',
        titulo: 'Em Chamas',
        autor: autores[5],
        ano: 2009,
        ordem: 2,
        imagem: 'https://m.media-amazon.com/images/I/91CJl3U6RQL.jpg',
        link: 'https://www.amazon.com.br/dp/B003P2WUK8'
      },
      {
        id: 'a-esperanca',
        titulo: 'A Esperança',
        autor: autores[5],
        ano: 2010,
        ordem: 3,
        imagem: 'https://m.media-amazon.com/images/I/91WKHXtPxaL.jpg',
        link: 'https://www.amazon.com.br/dp/B003P2WUWW'
      }
    ]
  },
  {
    id: 'divergente',
    titulo: 'Divergente',
    descricao:
      'A série "Divergente", escrita por Veronica Roth, é ambientada em uma Chicago futurista, onde a sociedade é dividida em facções baseadas em virtudes: Abnegação, Amizade, Audácia, Franqueza e Erudição. A história segue Beatrice "Tris" Prior, uma jovem que descobre ser Divergente, ou seja, alguém que não se encaixa em uma única facção. Enquanto luta para entender sua identidade e enfrentar um regime autoritário, Tris embarca em uma jornada de autodescoberta, amor e resistência.',
    autor: autores[6],
    ano: 2011,
    imagem: 'https://wallpapers.com/images/hd/divergent-movie-poster-kv92pljrcflexbv8.jpg',
    livros: [
      {
        id: 'divergente',
        titulo: 'Divergente',
        autor: autores[6],
        ano: 2011,
        ordem: 1,
        imagem: 'https://m.media-amazon.com/images/I/81s6DUyQCZL.jpg',
        link: 'https://www.amazon.com.br/dp/B006AJ0VV6'
      },
      {
        id: 'insurgente',
        titulo: 'Insurgente',
        autor: autores[6],
        ano: 2012,
        ordem: 2,
        imagem: 'https://m.media-amazon.com/images/I/81DMc2dqq-L.jpg',
        link: 'https://www.amazon.com.br/dp/B0068Y1E16'
      },
      {
        id: 'convergente',
        titulo: 'Convergente',
        autor: autores[6],
        ano: 2013,
        ordem: 3,
        imagem: 'https://m.media-amazon.com/images/I/81gQyRllFbL.jpg',
        link: 'https://www.amazon.com.br/dp/B00AERWMTQ'
      }
    ]
  }
];

export default series
