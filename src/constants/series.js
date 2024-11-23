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
        imagem: 'https://m.media-amazon.com/images/I/81tmn7qB-bL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/Um-Estudo-Vermelho-Cole%C3%A7%C3%A3o-Cl%C3%A1ssicos/dp/8537810878/ref=sr_1_4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3OTSQNS3HNUUO&dib=eyJ2IjoiMSJ9.PeplKgBpCuIs4ku4nJyV3FvJS-Xp1Hh2UNZElJmJhFhImk_XlnqU_pdo73L4Qo9QeXVLzSse8gMCWMTg-g5cOrPPrByyVZYvgxBPmA1gbIUSNjpPkHAzBByf6wALL-0exJ2kv_D76lffHMB_L4hLqtv_ptGKwWgKX_At6V_YPePQY1knOQFXcrzmJ1ENwwuy7x4oMGTg-ZYJp5Vcu9RZ9XlYAOzLYXJCCl1Oten4aHs.Iam3mwDD3VzV3-p1PFfmJI2F1zYpsv288Yud4tgITro&dib_tag=se&keywords=Arthur+Conan+Doyle&qid=1732319608&s=books&sprefix=arthur+conan+doyle%2Cstripbooks%2C152&sr=1-4'
      },
      {
        id: 'o-sinal-dos-quatro',
        titulo: 'O Sinal dos Quatro',
        autor: autores[12],
        ano: 1890,
        ordem: 2,
        imagem: 'https://m.media-amazon.com/images/I/61be7vluTaL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/Sherlock-Holmes-Signo-Quatro-Capa/dp/8595201862/ref=sr_1_14?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3OTSQNS3HNUUO&dib=eyJ2IjoiMSJ9.PeplKgBpCuIs4ku4nJyV3FvJS-Xp1Hh2UNZElJmJhFhImk_XlnqU_pdo73L4Qo9QeXVLzSse8gMCWMTg-g5cOrPPrByyVZYvgxBPmA1gbIUSNjpPkHAzBByf6wALL-0exJ2kv_D76lffHMB_L4hLqtv_ptGKwWgKX_At6V_YPePQY1knOQFXcrzmJ1ENwwuy7x4oMGTg-ZYJp5Vcu9RZ9XlYAOzLYXJCCl1Oten4aHs.Iam3mwDD3VzV3-p1PFfmJI2F1zYpsv288Yud4tgITro&dib_tag=se&keywords=Arthur+Conan+Doyle&qid=1732319608&s=books&sprefix=arthur+conan+doyle%2Cstripbooks%2C152&sr=1-14'
      },
      {
        id: 'o-cao-dos-baskervilles',
        titulo: 'O Cão dos Baskervilles',
        autor: autores[12],
        ano: 1902,
        ordem: 3,
        imagem: 'https://m.media-amazon.com/images/I/619kzsBXy8L._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/Sherlock-Holmes-C%C3%A3o-dos-Baskervilles/dp/8595201919/ref=sr_1_34?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3OTSQNS3HNUUO&dib=eyJ2IjoiMSJ9.Z3r1VP5RnsxKsJ6T2MNmpuPNVt6VB5Mbg8zcnjk7KuCynqEo7Y70r467Xr1aX5Z9TGJsDDBj3MXlbCyjTRIPKw.GK3SK1dWzTPf3q6LeyL2-HRdmKsLAhKai-Q8zkSP9-M&dib_tag=se&keywords=Arthur+Conan+Doyle&qid=1732319808&s=books&sprefix=arthur+conan+doyle%2Cstripbooks%2C152&sr=1-34'
      },
      {
        id: 'o-vale-do-medo',
        titulo: 'O Vale do Medo',
        autor: autores[12],
        ano: 1915,
        ordem: 4,
        imagem: 'https://m.media-amazon.com/images/I/71QodoRZl9L._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/Vale-Medo-Arthur-Conan-Doyle/dp/8537814768/ref=sr_1_37?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3OTSQNS3HNUUO&dib=eyJ2IjoiMSJ9.Z3r1VP5RnsxKsJ6T2MNmpuPNVt6VB5Mbg8zcnjk7KuCynqEo7Y70r467Xr1aX5Z9TGJsDDBj3MXlbCyjTRIPKw.GK3SK1dWzTPf3q6LeyL2-HRdmKsLAhKai-Q8zkSP9-M&dib_tag=se&keywords=Arthur+Conan+Doyle&qid=1732319808&s=books&sprefix=arthur+conan+doyle%2Cstripbooks%2C152&sr=1-37&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9'
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
        imagem: 'https://m.media-amazon.com/images/I/711WTt57f7L._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/As-Cr%C3%B4nicas-Narnia-Sobrinho-Mago/dp/8578277902/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=38GLIS7XX2BEF&dib=eyJ2IjoiMSJ9.K9hKhORGuLnHM6xSRcRV_dAJD2a8jAwaetahfsv4jytSD7fMoBAixvasbFEdQkFUmnaa9Ito1T847778DkTCv8hAyT63Jk7kca5KK1eAQCeS0b7gJJXF7k-EfwyzfnUJEZmIT9Tl2Qs-_S71JCJl8Vnm-tLDCpZ51DLCe4bCRbwSQclp7OAx6BLcynez9XgrM05k7YUuo15YGcJZmkbTeBLIfqwNoLN2EEXBFMILlXM.SiQQCmiLMrm1m-B61h2g6a3zTt6arwBMng9AVAUqucI&dib_tag=se&keywords=C.S.+Lewis+narnia+mago&qid=1732319949&s=books&sprefix=c.s.+lewis+narnia+mago%2Cstripbooks%2C144&sr=1-2&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9'
      },
      {
        id: 'o-leao-a-feiticeira-e-o-guarda-roupa',
        titulo: 'O Leão, a Feiticeira e o Guarda-Roupa',
        autor: autores[8],
        ano: 1950,
        ordem: 2,
        imagem: 'https://m.media-amazon.com/images/I/912ChRKXhVL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/Bruxa-Guarda-roupa-Cr%C3%B4nicas-N%C3%A1rnia-Livro/dp/B008NUJ99M/ref=sr_1_15?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31P6JX3ICRMOS&dib=eyJ2IjoiMSJ9.ssHPnelcSJuVRalKKOlXjXnA3g1z0pu9WFDqL3uzLESnr0cD2iBC87fWmCkNJr19ta5gJlgJQ5tGEr5hmd33wbYS2ivwk0C8nHBKzUBkMDQeaJV7qunZpJORLSvhB0FwwJ1hz56TNSnLawod_-Sdlt8-vpIFN8mXC60tt6G_Sl312c7MMlE6snGcl7PDQQmpMjE2h2Yq7CF55_RK56GKulErIAk9AbMnhniRXXtAiX0.5b-Rg5HJXwCZnjZoX3HnWwXJK9A_sUY7N3fG-ZAj6OA&dib_tag=se&keywords=c.s.+lewis+narnia+le%C3%A3o&qid=1732319982&s=books&sprefix=c.s.+lewis+narnia+le+ao%2Cstripbooks%2C138&sr=1-15'
      },
      {
        id: 'o-cavalo-e-seu-menino',
        titulo: 'O Cavalo e Seu Menino',
        autor: autores[8],
        ano: 1954,
        ordem: 3,
        imagem: 'https://m.media-amazon.com/images/I/71aPtIezcWL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/As-cr%C3%B4nicas-N%C3%A1rnia-cavalo-menino/dp/8578273583/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=OV2NXEWL0ODX&dib=eyJ2IjoiMSJ9.gtwPpGF7B2xVMwJXSFxRIeXST9Ld_KQpj5otfxBJ-H-p37d4ZL4aobVlqZn9XCgF33G_jH9vD0LPOtVKTz4PhTahi9d9SYtC8sF9gddsYTPMkXXo1utUQoBA5jhgpH6-cmwtZgD3iUJJaVtm0j4rHd8PaMgh7TdkdK6X8yCL_UGtuWlDG4dobsqbAGIZ4QgkpOyWV3203n2P3gyCxvjENbC_XX9drg6JkpQw-bR04II.eRfpGoV6KtV_xZeqRH-mIcmwU7kSc3qT1MS7QoNU9f4&dib_tag=se&keywords=c.s.+lewis+narnia+cavalo&qid=1732320253&s=books&sprefix=c.s.+lewis+narnia+cavalo%2Cstripbooks%2C181&sr=1-2'
      },
      {
        id: 'principe-caspian',
        titulo: 'Príncipe Caspian',
        autor: autores[8],
        ano: 1951,
        ordem: 4,
        imagem: 'https://m.media-amazon.com/images/I/81WW5ewAnbL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/Pr%C3%ADncipe-Caspian-C-S-Lewis/dp/8546901953/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1V635D9DZYVDU&dib=eyJ2IjoiMSJ9.37AdYPbYyyNBsvoRWyhMSaBxUnH46HqSXaNkMRQhDR-OX0Yre5ftXjgBFH-vf-K9ALtdXHJxXSu80KUSwvAUSylS3Q7_CJrzfBNFG34p63fbxL3lYcCsLusbJqQ4xg_5xVB6ay14lL1QWOppO8UD8O0werNBdc-kZ7oLrXyiTdAp5Wf4Y52DmwIiLt-MwvqpQAl90iLp0JrYx4Yi8JPxERqNUx1zMrBALR4KWhdRi6k.0WsjsrZ36tklBWCot_bTQ7LbMN4J8eLmKAbVDsQAHgE&dib_tag=se&keywords=c.s.+lewis+prIncipe&qid=1732321252&s=books&sprefix=c.s.+lewis+principe%2Cstripbooks%2C163&sr=1-2'
      },
      {
        id: 'a-viagem-do-peregrino-da-alvorada',
        titulo: 'A Viagem do Peregrino da Alvorada',
        autor: autores[8],
        ano: 1952,
        ordem: 5,
        imagem: 'https://m.media-amazon.com/images/I/71rHFeIWJKL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/viagem-do-peregrino-alvorada/dp/854690135X/ref=sr_1_14?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31P6JX3ICRMOS&dib=eyJ2IjoiMSJ9.ssHPnelcSJuVRalKKOlXjXnA3g1z0pu9WFDqL3uzLESnr0cD2iBC87fWmCkNJr19ta5gJlgJQ5tGEr5hmd33wbYS2ivwk0C8nHBKzUBkMDQeaJV7qunZpJORLSvhB0FwwJ1hz56TNSnLawod_-Sdlt8-vpIFN8mXC60tt6G_Sl312c7MMlE6snGcl7PDQQmpMjE2h2Yq7CF55_RK56GKulErIAk9AbMnhniRXXtAiX0.5b-Rg5HJXwCZnjZoX3HnWwXJK9A_sUY7N3fG-ZAj6OA&dib_tag=se&keywords=c.s.+lewis+narnia+le%C3%A3o&qid=1732319982&s=books&sprefix=c.s.+lewis+narnia+le+ao%2Cstripbooks%2C138&sr=1-14'
      },
      {
        id: 'a-cadeira-de-prata',
        titulo: 'A Cadeira de Prata',
        autor: autores[8],
        ano: 1953,
        ordem: 6,
        imagem: 'https://m.media-amazon.com/images/I/71TiKAV9d4L._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/As-cr%C3%B4nicas-N%C3%A1rnia-cadeira-prata/dp/8578277910/ref=sr_1_17?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31P6JX3ICRMOS&dib=eyJ2IjoiMSJ9.cPE9CzRn4bF2YVA6u5d7Fu92UdpDeTCRANAN5-newKxKL8LUQbLSOpcH6xj7Yl9aNkEGYQWoMOh5U1Nc0Z5GUA.ykC5ntrpazsw-HPEI6oiw9EwB5gyxMWQzdqdUKhtMtU&dib_tag=se&keywords=c.s.+lewis+narnia+le%C3%A3o&qid=1732320099&s=books&sprefix=c.s.+lewis+narnia+le+ao%2Cstripbooks%2C138&sr=1-17'
      },
      {
        id: 'a-ultima-batalha',
        titulo: 'A Última Batalha',
        autor: autores[8],
        ano: 1956,
        ordem: 7,
        imagem: 'https://m.media-amazon.com/images/I/A1sgP7qIaEL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/As-Cr%C3%B4nicas-N%C3%A1rnia-%C3%9Altima-Batalha/dp/8533616201/ref=sr_1_24?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31P6JX3ICRMOS&dib=eyJ2IjoiMSJ9.Y09KkPkfxt2UO_aF0bsM3YWa7s3Y21msuZXBLbyR_21_7UgxGfRZR3hJgiosMgPid7MYFTCHrigHf3cFcpVwrvVJLpDbE-A9_zgZ9N54CXxy_RSLJFeFaxOp5eAUq3clX2e1vdVvvwjODSvYFs8xTU-IozXJwH0j9QGG8T4feGQ.v6iByz9r0pXW57XUe0rbkJNLt0UVUQlxZC7lt8YoBnM&dib_tag=se&keywords=c.s.+lewis+narnia+le%C3%A3o&qid=1732320099&s=books&sprefix=c.s.+lewis+narnia+le+ao%2Cstripbooks%2C138&sr=1-24'
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
        imagem: 'https://m.media-amazon.com/images/I/81ftPIL0vvL._SL1500_.jpg',
        link: 'https://www.amazon.com.br/guia-mochileiro-das-gal%C3%A1xias-ebook/dp/B00A3D9OF6?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.0LHv63Frkk6asxUQnKUogeWeQAUdvT-5eTQlxgvQOMEAplc-IMM_vjvf2i1nnPP3XYiXreCbXOTrAYYgQNJkay7lX5qdBnhcYvvgxwNadgkn9DAV1mP_9IyVAISRwFy_TpWF7NVqVZdXCzp3h2bAT5BiBgdNCYfhr5zlz0n9csLpN6J5Ico9qXExXkCgSL93cAGtEHLL0CSH7YzlomB5KsmxZTAZn-wPTVPtjE24mks.m1-Vjt8sXZK0mvNlwrciCHFwP_UokecOaChc0m0ROEE&dib_tag=AUTHOR'
      },
      {
        id: 'o-restaurante-ambientado-no-fim-do-universo',
        titulo: 'O Restaurante no Fim do Universo',
        autor: autores[4],
        ano: 1980,
        ordem: 2,
        imagem: 'https://m.media-amazon.com/images/I/81ebIAdN+uL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/restaurante-fim-universo-Douglas-Adams/dp/8599296582/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2HYP9R6B1LGAT&dib=eyJ2IjoiMSJ9.xWfFBdIujPV-RquYB21FIjD7JCV5wc-fXtADF5bxMysibpJLHDavOaeRfPhGCLeIAK6N4IbFx_sMnBWDWhTQLjYlhNgNm6dH_9OSYopS3yoMwml-W6ptzSPgX9wzKDgDumoi5htH7Ynocf80kRZ6kYpBwj6_91VB6D6niE9kzQIvQkyNXR8FJDMUEfItLdrehMrk3dph6AvFPdrD7v8Vk49q8ukbxGI65TRSTxL4CYM.Ua7Vb4zFv56-dm_wNbbKXk9Yp7TGo6R3FX3gEPqEPuU&dib_tag=se&keywords=O+Guia+do+Mochileiro+das+Gal%C3%A1xias&qid=1732321306&s=books&sprefix=o+guia+do+mochileiro+das+gal%C3%A1xias%2Cstripbooks%2C229&sr=1-3'
      },
      {
        id: 'a-vida-o-universo-e-tudo-mais',
        titulo: 'A Vida, o Universo e Tudo Mais',
        autor: autores[4],
        ano: 1982,
        ordem: 3,
        imagem: 'https://m.media-amazon.com/images/I/81utwCt4LDL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/vida-universo-tudo-mais/dp/8599296590/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2HYP9R6B1LGAT&dib=eyJ2IjoiMSJ9.xWfFBdIujPV-RquYB21FIjD7JCV5wc-fXtADF5bxMysibpJLHDavOaeRfPhGCLeIAK6N4IbFx_sMnBWDWhTQLjYlhNgNm6dH_9OSYopS3yoMwml-W6ptzSPgX9wzKDgDumoi5htH7Ynocf80kRZ6kYpBwj6_91VB6D6niE9kzQIvQkyNXR8FJDMUEfItLdrehMrk3dph6AvFPdrD7v8Vk49q8ukbxGI65TRSTxL4CYM.Ua7Vb4zFv56-dm_wNbbKXk9Yp7TGo6R3FX3gEPqEPuU&dib_tag=se&keywords=O+Guia+do+Mochileiro+das+Gal%C3%A1xias&qid=1732321306&s=books&sprefix=o+guia+do+mochileiro+das+gal%C3%A1xias%2Cstripbooks%2C229&sr=1-7'
      },
      {
        id: 'ate-mais-e-obrigado-pelo-peixe',
        titulo: 'Até mais, e obrigado pelos peixes!',
        autor: autores[4],
        ano: 1987,
        ordem: 4,
        imagem: 'https://m.media-amazon.com/images/I/813uy12RyYL._SL1500_.jpg',
        link: 'https://www.amazon.com.br/Obrigado-Pelos-Peixes-mochileiro-gal%C3%A1xias-ebook/dp/B00A3D1LWK?ref_=ast_author_dp&dib=eyJ2IjoiMSJ9.0LHv63Frkk6asxUQnKUogeWeQAUdvT-5eTQlxgvQOMEAplc-IMM_vjvf2i1nnPP3XYiXreCbXOTrAYYgQNJkay7lX5qdBnhcYvvgxwNadgkn9DAV1mP_9IyVAISRwFy_TpWF7NVqVZdXCzp3h2bAT5BiBgdNCYfhr5zlz0n9csLpN6J5Ico9qXExXkCgSL93cAGtEHLL0CSH7YzlomB5KsmxZTAZn-wPTVPtjE24mks.m1-Vjt8sXZK0mvNlwrciCHFwP_UokecOaChc0m0ROEE&dib_tag=AUTHOR'
      },
      {
        id: 'praticamente-inofensiva',
        titulo: 'Praticamente Inofensiva',
        autor: autores[4],
        ano: 1992,
        ordem: 5,
        imagem: 'https://m.media-amazon.com/images/I/81zsXaEoqML._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/Praticamente-inofensiva-Douglas-Adams/dp/8599296612/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2HYP9R6B1LGAT&dib=eyJ2IjoiMSJ9.xWfFBdIujPV-RquYB21FIjD7JCV5wc-fXtADF5bxMysibpJLHDavOaeRfPhGCLeIAK6N4IbFx_sMnBWDWhTQLjYlhNgNm6dH_9OSYopS3yoMwml-W6ptzSPgX9wzKDgDumoi5htH7Ynocf80kRZ6kYpBwj6_91VB6D6niE9kzQIvQkyNXR8FJDMUEfItLdrehMrk3dph6AvFPdrD7v8Vk49q8ukbxGI65TRSTxL4CYM.Ua7Vb4zFv56-dm_wNbbKXk9Yp7TGo6R3FX3gEPqEPuU&dib_tag=se&keywords=O+Guia+do+Mochileiro+das+Gal%C3%A1xias&qid=1732321306&s=books&sprefix=o+guia+do+mochileiro+das+gal%C3%A1xias%2Cstripbooks%2C229&sr=1-6'
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
        imagem: 'https://m.media-amazon.com/images/I/81zN7udGRUL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/Duna-Frank-Herbert/dp/857657313X/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=29AG714G7F3JX&dib=eyJ2IjoiMSJ9.W8yC5GvijSEbd-zGZ0hTXxd82J50LhX0TiTyxQl07ZGwzDgi4aJLIrQqYz88ED6Ei-wfOHCIWMDcY5Z1TIIj9zFp5vOhWCzRjuTbEmCQygul4b2KHacLHCEu6t2cHK-WDomgpM6n-hKZ2140QyGv6EFr9CqM9lxuBG2XU1JUyvEhvYzwaxZfuHEX4OP-igEyhgwR8R6hPwYVwhnNkoXsdtqScHT5-IrJwi0FPUu10RQ.OTnalRfS3fbLP0mmEGFDEhFuTKegiZ8wyDFTNAr6lFM&dib_tag=se&keywords=duna&qid=1732321787&s=books&sprefix=duna%2Cstripbooks%2C213&sr=1-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9'
      },
      {
        id: 'messias-de-duna',
        titulo: 'Messias de Duna',
        autor: autores[3],
        ano: 1969,
        ordem: 2,
        imagem: 'https://m.media-amazon.com/images/I/91iLyWRwmRL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/Messias-Duna-Frank-Herbert/dp/8576573822/ref=sr_1_4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=29AG714G7F3JX&dib=eyJ2IjoiMSJ9.W8yC5GvijSEbd-zGZ0hTXxd82J50LhX0TiTyxQl07ZGwzDgi4aJLIrQqYz88ED6Ei-wfOHCIWMDcY5Z1TIIj9zFp5vOhWCzRjuTbEmCQygul4b2KHacLHCEu6t2cHK-WDomgpM6n-hKZ2140QyGv6EFr9CqM9lxuBG2XU1JUyvEhvYzwaxZfuHEX4OP-igEyhgwR8R6hPwYVwhnNkoXsdtqScHT5-IrJwi0FPUu10RQ.OTnalRfS3fbLP0mmEGFDEhFuTKegiZ8wyDFTNAr6lFM&dib_tag=se&keywords=duna&qid=1732321787&s=books&sprefix=duna%2Cstripbooks%2C213&sr=1-4&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9'
      },
      {
        id: 'filhos-de-duna',
        titulo: 'Filhos de Duna',
        autor: autores[3],
        ano: 1976,
        ordem: 3,
        imagem: 'https://m.media-amazon.com/images/I/810pYklnGsL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/Filhos-Duna-Frank-Herbert/dp/8576573148/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=29AG714G7F3JX&dib=eyJ2IjoiMSJ9.W8yC5GvijSEbd-zGZ0hTXxd82J50LhX0TiTyxQl07ZGwzDgi4aJLIrQqYz88ED6Ei-wfOHCIWMDcY5Z1TIIj9zFp5vOhWCzRjuTbEmCQygul4b2KHacLHCEu6t2cHK-WDomgpM6n-hKZ2140QyGv6EFr9CqM9lxuBG2XU1JUyvEhvYzwaxZfuHEX4OP-igEyhgwR8R6hPwYVwhnNkoXsdtqScHT5-IrJwi0FPUu10RQ.OTnalRfS3fbLP0mmEGFDEhFuTKegiZ8wyDFTNAr6lFM&dib_tag=se&keywords=duna&qid=1732321787&s=books&sprefix=duna%2Cstripbooks%2C213&sr=1-5&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9'
      },
      {
        id: 'o-imperador-deus-de-duna',
        titulo: 'O Imperador-Deus de Duna',
        autor: autores[3],
        ano: 1981,
        ordem: 4,
        imagem: 'https://m.media-amazon.com/images/I/91XCwEX5fiL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/Imperador-deus-Duna-4%C2%BA-Sextologia/dp/8576572621/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=29AG714G7F3JX&dib=eyJ2IjoiMSJ9.W8yC5GvijSEbd-zGZ0hTXxd82J50LhX0TiTyxQl07ZGwzDgi4aJLIrQqYz88ED6Ei-wfOHCIWMDcY5Z1TIIj9zFp5vOhWCzRjuTbEmCQygul4b2KHacLHCEu6t2cHK-WDomgpM6n-hKZ2140QyGv6EFr9CqM9lxuBG2XU1JUyvEhvYzwaxZfuHEX4OP-igEyhgwR8R6hPwYVwhnNkoXsdtqScHT5-IrJwi0FPUu10RQ.OTnalRfS3fbLP0mmEGFDEhFuTKegiZ8wyDFTNAr6lFM&dib_tag=se&keywords=duna&qid=1732321787&s=books&sprefix=duna%2Cstripbooks%2C213&sr=1-6&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9'
      },
      {
        id: 'hereges-de-duna',
        titulo: 'Hereges de Duna',
        autor: autores[3],
        ano: 1984,
        ordem: 5,
        imagem: 'https://m.media-amazon.com/images/I/61HtrwULeBL._SL1000_.jpg',
        link: 'https://www.amazon.com.br/Hereges-Duna-5-marcadores-destac%C3%A1veis/dp/8576574020?&linkCode=ll1&tag=estadaoamazon-20&linkId=d660483781f66d39f5ed3a53641b8097&language=pt_BR&ref_=as_li_ss_tl'
      },
      {
        id: 'as-herdeiras-de-duna',
        titulo: 'As Herdeiras de Duna',
        autor: autores[3],
        ano: 1985,
        ordem: 6,
        imagem: 'https://m.media-amazon.com/images/I/81TV6ef3IwL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/Herdeiras-Duna-Frank-Herbert-ebook/dp/B09DXBMVNC/ref=sr_1_9?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=29AG714G7F3JX&dib=eyJ2IjoiMSJ9.W8yC5GvijSEbd-zGZ0hTXxd82J50LhX0TiTyxQl07ZGwzDgi4aJLIrQqYz88ED6Ei-wfOHCIWMDcY5Z1TIIj9zFp5vOhWCzRjuTbEmCQygul4b2KHacLHCEu6t2cHK-WDomgpM6n-hKZ2140QyGv6EFr9CqM9lxuBG2XU1JUyvEhvYzwaxZfuHEX4OP-igEyhgwR8R6hPwYVwhnNkoXsdtqScHT5-IrJwi0FPUu10RQ.OTnalRfS3fbLP0mmEGFDEhFuTKegiZ8wyDFTNAr6lFM&dib_tag=se&keywords=duna&qid=1732321787&s=books&sprefix=duna%2Cstripbooks%2C213&sr=1-9'
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
        imagem: 'https://m.media-amazon.com/images/I/611qVLzatFL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/ladr%C3%A3o-raios-S%C3%A9rie-Jackson-olimpianos/dp/6555606533/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1N3YZTOBCWFDU&dib=eyJ2IjoiMSJ9.57YrOZbu9EdDXDewhpFYRuE-nVeTIT4MbhpzX4lh_dqtWjvT4BMy6vpa8LD6ZoZk1ohDFUUqL7Kq1xQi2DRpMK8kCl-VDiw3gn2RM9I4ocFFU-karIXkmQKrivnxRyWMkLW9K6L5iyioJUodDDHYtVC92isdidDeqgG58Fbl3FRvZFE7jusTnVCaTg0o_6GAumupw8X_QB3JBAdOGK5e4KttwaH-7MYV9ekiy7_pPns.ChDh4Bl0y2PYoPrluYkUtjD9vjGaXGg3mXXksuagcy4&dib_tag=se&keywords=Percy+Jackson&qid=1732322608&s=books&sprefix=percy+jackson%2Cstripbooks%2C268&sr=1-1'
      },
      {
        id: 'o-mar-de-monstros',
        titulo: 'O Mar de Monstros',
        autor: autores[7],
        ano: 2006,
        ordem: 2,
        imagem: 'https://m.media-amazon.com/images/I/61bmaEI9amL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/mar-monstros-S%C3%A9rie-Jackson-olimpianos/dp/6555606525/ref=sr_1_8?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1N3YZTOBCWFDU&dib=eyJ2IjoiMSJ9.57YrOZbu9EdDXDewhpFYRuE-nVeTIT4MbhpzX4lh_dqtWjvT4BMy6vpa8LD6ZoZk1ohDFUUqL7Kq1xQi2DRpMK8kCl-VDiw3gn2RM9I4ocFFU-karIXkmQKrivnxRyWMkLW9K6L5iyioJUodDDHYtVC92isdidDeqgG58Fbl3FRvZFE7jusTnVCaTg0o_6GAumupw8X_QB3JBAdOGK5e4KttwaH-7MYV9ekiy7_pPns.ChDh4Bl0y2PYoPrluYkUtjD9vjGaXGg3mXXksuagcy4&dib_tag=se&keywords=Percy+Jackson&qid=1732322608&s=books&sprefix=percy+jackson%2Cstripbooks%2C268&sr=1-8'
      },
      {
        id: 'a-maldicao-do-tita',
        titulo: 'A Maldição do Titã',
        autor: autores[7],
        ano: 2007,
        ordem: 3,
        imagem: 'https://m.media-amazon.com/images/I/61s1FVTeVpL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/maldi%C3%A7%C3%A3o-tit%C3%A3-S%C3%A9rie-Jackson-olimpianos/dp/6555606541/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1N3YZTOBCWFDU&dib=eyJ2IjoiMSJ9.57YrOZbu9EdDXDewhpFYRuE-nVeTIT4MbhpzX4lh_dqtWjvT4BMy6vpa8LD6ZoZk1ohDFUUqL7Kq1xQi2DRpMK8kCl-VDiw3gn2RM9I4ocFFU-karIXkmQKrivnxRyWMkLW9K6L5iyioJUodDDHYtVC92isdidDeqgG58Fbl3FRvZFE7jusTnVCaTg0o_6GAumupw8X_QB3JBAdOGK5e4KttwaH-7MYV9ekiy7_pPns.ChDh4Bl0y2PYoPrluYkUtjD9vjGaXGg3mXXksuagcy4&dib_tag=se&keywords=Percy+Jackson&qid=1732322608&s=books&sprefix=percy+jackson%2Cstripbooks%2C268&sr=1-6'
      },
      {
        id: 'a-batalha-do-labirinto',
        titulo: 'A Batalha do Labirinto',
        autor: autores[7],
        ano: 2008,
        ordem: 4,
        imagem: 'https://m.media-amazon.com/images/I/718W1i4RGyL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/batalha-labirinto-S%C3%A9rie-Jackson-olimpianos/dp/6555606509/ref=sr_1_9?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1N3YZTOBCWFDU&dib=eyJ2IjoiMSJ9.57YrOZbu9EdDXDewhpFYRuE-nVeTIT4MbhpzX4lh_dqtWjvT4BMy6vpa8LD6ZoZk1ohDFUUqL7Kq1xQi2DRpMK8kCl-VDiw3gn2RM9I4ocFFU-karIXkmQKrivnxRyWMkLW9K6L5iyioJUodDDHYtVC92isdidDeqgG58Fbl3FRvZFE7jusTnVCaTg0o_6GAumupw8X_QB3JBAdOGK5e4KttwaH-7MYV9ekiy7_pPns.ChDh4Bl0y2PYoPrluYkUtjD9vjGaXGg3mXXksuagcy4&dib_tag=se&keywords=Percy+Jackson&qid=1732322608&s=books&sprefix=percy+jackson%2Cstripbooks%2C268&sr=1-9'
      },
      {
        id: 'o-ultimo-olimpiano',
        titulo: 'O Último Olimpiano',
        autor: autores[7],
        ano: 2009,
        ordem: 5,
        imagem: 'https://m.media-amazon.com/images/I/61zKLgJx0IL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/%C3%BAltimo-olimpiano-S%C3%A9rie-Jackson-olimpianos/dp/6555606517/ref=sr_1_7?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1N3YZTOBCWFDU&dib=eyJ2IjoiMSJ9.57YrOZbu9EdDXDewhpFYRuE-nVeTIT4MbhpzX4lh_dqtWjvT4BMy6vpa8LD6ZoZk1ohDFUUqL7Kq1xQi2DRpMK8kCl-VDiw3gn2RM9I4ocFFU-karIXkmQKrivnxRyWMkLW9K6L5iyioJUodDDHYtVC92isdidDeqgG58Fbl3FRvZFE7jusTnVCaTg0o_6GAumupw8X_QB3JBAdOGK5e4KttwaH-7MYV9ekiy7_pPns.ChDh4Bl0y2PYoPrluYkUtjD9vjGaXGg3mXXksuagcy4&dib_tag=se&keywords=Percy+Jackson&qid=1732322608&s=books&sprefix=percy+jackson%2Cstripbooks%2C268&sr=1-7'
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
        imagem: 'https://m.media-amazon.com/images/I/71WOkspHbOL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/Jogos-vorazes-Trilogia-Vorazes-Livro-ebook/dp/B00A3D1OYU/ref=sr_1_1?dib=eyJ2IjoiMSJ9.GRuF1Lzc_D-Epo55lLuFxX7JklkWHo2HP9zh9oBKpDYHQcKdml4DJxo1ohFz6dER10YjYdK6VEqmgbJfokBljnaJHBEf1XkULnXf9STlhE8qGNboXMulX9riUGzTS07zzRuVjJKZCudNd3AjU0qrNiFkYXyGFXEmcfKtnKOqzO7zMvTFclqnteh4rtRKZkboaPZKUnWnCHiJNPYU_2fSKSUBaBa0n_76cNreHYWa7bk.djyxE_ak-r2XJ8EJ_olE91rxmM_o6sVJErRIfd0WLZY&dib_tag=se&qid=1732323230&refinements=p_27%3ASuzanne+Collins&s=digital-text&sr=1-1'
      },
      {
        id: 'em-chamas',
        titulo: 'Em Chamas',
        autor: autores[5],
        ano: 2009,
        ordem: 2,
        imagem: 'https://m.media-amazon.com/images/I/71hX09mm4rL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/chamas-Trilogia-Jogos-Vorazes-Livro-ebook/dp/B00A3D1GUW/ref=sr_1_4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1G8Z40XICO29A&dib=eyJ2IjoiMSJ9.0BkU1ZTPK5JQrrc2mWMultUGCrIKnPJNXqmdnmpbXKunqfmD7uJBNdp4DqebT1LLJP6V1VUuHGGWDi3XUYqUX2yQwUb0NMUBzR-os4OQjgaCIaAaejXul21ej6BvFM9KrVCOUwSXlXjMjV1npUZOXReOUnC9mQ3TZCBjdwQQaXTixOs_TAEqRck2dWU3xk1SM98n2z_lzOyvG-6JG85EHnZ3uvvwgoDmWduQmJHD1Uo.Vhgsj8p1-VZDyZvDuvSj8UpMBY9JVFOUZguZgISpots&dib_tag=se&keywords=jogos+vorazes&qid=1732322926&s=books&sprefix=jogos+voraze%2Cstripbooks%2C173&sr=1-4'
      },
      {
        id: 'a-esperanca',
        titulo: 'A Esperança',
        autor: autores[5],
        ano: 2010,
        ordem: 3,
        imagem: 'https://m.media-amazon.com/images/I/715ejknjS4L._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/esperan%C3%A7a-Trilogia-Jogos-Vorazes-Livro-ebook/dp/B00A3D1HAQ/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1G8Z40XICO29A&dib=eyJ2IjoiMSJ9.0BkU1ZTPK5JQrrc2mWMultUGCrIKnPJNXqmdnmpbXKunqfmD7uJBNdp4DqebT1LLJP6V1VUuHGGWDi3XUYqUX2yQwUb0NMUBzR-os4OQjgaCIaAaejXul21ej6BvFM9KrVCOUwSXlXjMjV1npUZOXReOUnC9mQ3TZCBjdwQQaXTixOs_TAEqRck2dWU3xk1SM98n2z_lzOyvG-6JG85EHnZ3uvvwgoDmWduQmJHD1Uo.Vhgsj8p1-VZDyZvDuvSj8UpMBY9JVFOUZguZgISpots&dib_tag=se&keywords=jogos+vorazes&qid=1732322926&s=books&sprefix=jogos+voraze%2Cstripbooks%2C173&sr=1-6'
      },
      {
        id: 'a-cantiga-dos-passaros-e-das-serpentes',
        titulo: 'A Cantiga dos pássaros e das serpentes',
        autor: autores[5],
        ano: 2020,
        ordem: 4,
        imagem: 'https://m.media-amazon.com/images/I/711wgxr7SDL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/cantiga-p%C3%A1ssaros-serpentes-Trilogia-Vorazes-ebook/dp/B088P9D6P1/ref=sr_1_5?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1G8Z40XICO29A&dib=eyJ2IjoiMSJ9.0BkU1ZTPK5JQrrc2mWMultUGCrIKnPJNXqmdnmpbXKunqfmD7uJBNdp4DqebT1LLJP6V1VUuHGGWDi3XUYqUX2yQwUb0NMUBzR-os4OQjgaCIaAaejXul21ej6BvFM9KrVCOUwSXlXjMjV1npUZOXReOUnC9mQ3TZCBjdwQQaXTixOs_TAEqRck2dWU3xk1SM98n2z_lzOyvG-6JG85EHnZ3uvvwgoDmWduQmJHD1Uo.Vhgsj8p1-VZDyZvDuvSj8UpMBY9JVFOUZguZgISpots&dib_tag=se&keywords=jogos+vorazes&qid=1732323077&s=books&sprefix=jogos+voraze%2Cstripbooks%2C173&sr=1-5'
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
        imagem: 'https://m.media-amazon.com/images/I/81H1MhBbPbL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/Divergent-1-3-Veronica-Roth/dp/0062387243/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=BS8YLGL6LH0E&dib=eyJ2IjoiMSJ9.wn4hnyuOQAO60rGGD3oCYlBpIDeWm474Yn56SYUZJXL94upRmjaKUv0ZO3ptsoAV5yDLrc7RuXTWPPqY6hl-wJdVEAVVLMpyXztPlgjsCY1C8vUZL7LpeYx6uA1znQp_ErLznLhqaTfSGXwEnNAy6EEVex6dKxy97nJlcw4-WbH93SZCmNtRsqOXI90ECzt5Tszsidq7-UYVEyTl_o-dc35VoX6_NUT9zmQ-V-ATUYQ.sDrAII6kZcrlVF8C0AProJA1TrBOU2zQYHvb5h6UDm8&dib_tag=se&keywords=divergente&qid=1732323400&s=books&sprefix=divergent%2Cstripbooks%2C177&sr=1-6&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9'
      },
      {
        id: 'insurgente',
        titulo: 'Insurgente',
        autor: autores[6],
        ano: 2012,
        ordem: 2,
        imagem: 'https://m.media-amazon.com/images/I/91SYT+tz+BL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/Insurgente-Uma-Escolha-Pode-Destruir/dp/8579801559/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=BS8YLGL6LH0E&dib=eyJ2IjoiMSJ9.wn4hnyuOQAO60rGGD3oCYlBpIDeWm474Yn56SYUZJXL94upRmjaKUv0ZO3ptsoAV5yDLrc7RuXTWPPqY6hl-wJdVEAVVLMpyXztPlgjsCY1C8vUZL7LpeYx6uA1znQp_ErLznLhqaTfSGXwEnNAy6EEVex6dKxy97nJlcw4-WbH93SZCmNtRsqOXI90ECzt5Tszsidq7-UYVEyTl_o-dc35VoX6_NUT9zmQ-V-ATUYQ.sDrAII6kZcrlVF8C0AProJA1TrBOU2zQYHvb5h6UDm8&dib_tag=se&keywords=divergente&qid=1732323400&s=books&sprefix=divergent%2Cstripbooks%2C177&sr=1-3&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9'
      },
      {
        id: 'convergente',
        titulo: 'Convergente',
        autor: autores[6],
        ano: 2013,
        ordem: 3,
        imagem: 'https://m.media-amazon.com/images/I/81Lpt68N+HL._AC_UY218_.jpg',
        link: 'https://www.amazon.com.br/Convergente-Escolha-Definir-Trilogia-Divergente/dp/8579801869/ref=sr_1_4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=BS8YLGL6LH0E&dib=eyJ2IjoiMSJ9.wn4hnyuOQAO60rGGD3oCYlBpIDeWm474Yn56SYUZJXL94upRmjaKUv0ZO3ptsoAV5yDLrc7RuXTWPPqY6hl-wJdVEAVVLMpyXztPlgjsCY1C8vUZL7LpeYx6uA1znQp_ErLznLhqaTfSGXwEnNAy6EEVex6dKxy97nJlcw4-WbH93SZCmNtRsqOXI90ECzt5Tszsidq7-UYVEyTl_o-dc35VoX6_NUT9zmQ-V-ATUYQ.sDrAII6kZcrlVF8C0AProJA1TrBOU2zQYHvb5h6UDm8&dib_tag=se&keywords=divergente&qid=1732323400&s=books&sprefix=divergent%2Cstripbooks%2C177&sr=1-4&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9'
      }
    ]
  }
];

export default series
