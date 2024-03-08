import { StyleSheet, View } from 'react-native'
import Items from '../Items'

export default function Home() {

  const series = [{
    img: require("../../assets/img/Goutobon.jpg"),
    title: "Goutobon no Hanayome",
    desc: "As Quintuplas é um anime que segue a história de Fuutarou Uesugi, um tutor contratado para ensinar as quintuplas Nakano - Ichika, Nino, Miku, Yotsuba e Itsuki. O enredo combina comédia romântica, drama e slice of life, explorando temas de família, amizade e amor."

  },
  {
    img: require("../../assets/img/Dxd.jpg"),
    title: "High School DxD",
    desc: "High School DxD é um anime que combina ação, comédia, romance e fantasia com elementos ecchi. A história segue Issei Hyoudou, um estudante ressuscitado como demônio, recrutado por Rias Gremory. Envolvendo batalhas sobrenaturais, a série aborda temas de amizade, lealdade e poder."

  },
  {
    img: require("../../assets/img/Tsurenai.webp"),
    title: "Tsurenai Hodo Aokute",
    desc: "Um estudante transferido que sofre de uma doença incurável chamada curiosidade encontra um ser misterioso que é belo, fofo, legal e aterrorizante. O primeiro de uma nova geração de autores de quadrinhos de horror apresenta uma história de amor abissal, uma história de fantasmas para espiar e sensualidade para você."

  },
  {
    img: require("../../assets/img/Kaguya.webp"),
    title: "Kaguya-sama: Love is war",
    desc: "Kaguya-sama: Love is War é uma série que segue Miyuki Shirogane e Kaguya Shinomiya, ambos presidentes do conselho estudantil em uma academia prestigiada. Embora ambos tenham sentimentos românticos um pelo outro, a narrativa se concentra em suas tentativas elaboradas e cômicas de fazer com que o outro confesse primeiro."

  },
  {
    img: require("../../assets/img/Bunny.jpg"),
    title: "Bunny Girl Senpai",
    desc: "Bunny Girl Senpai, é um anime que explora o conceito de Síndrome da Adolescência Pubertária, um fenômeno que cria situações estranhas e problemas psicológicos para os adolescentes. A história segue Sakuta Azusagawa, que encontra a atriz Mai Sakurajima vestida de coelhinha, mas percebe que ele é o único capaz de vê-la."

  },
  {
    img: require("../../assets/img/Domekano.jpg"),
    title: "Domestic girlfriend",
    desc: "Natsuo é um estudante do ensino médio que se encontra desesperadamente apaixonado pela sua professora, Hina. Numa tentativa de melhorar o seu humor, procura outra pessoa e conhece uma mulher chamada Rui. Os dois dormem juntos, esperando nunca mais se encontrarem, mas o destino tem outros planos."

  },
  {
    img: require("../../assets/img/Saekano.jpg"),
    title: "Saekano",
    desc: "Tomoya Aki, um adolescente que trabalha meio período para financiar seu estilo de vida otaku (animes, jogos de namoro, light novels e produtos parecidos) encontra uma garota bonita um dia, durante as férias de primavera.  Um mês depois, ele descobre que a garota é sua colega de turma, Megumi Kato, que é quase imperceptível para seus colegas de classe."

  },
  {
    img: require("../../assets/img/Monster.jpg"),
    title: "Monster Musume",
    desc: "A história gira em torno do protagonista Kurusu Kimihito, que muitas vezes é chamado de querido, dentre outros apelidos carinhosos, pelas suas hóspedes. Após ele se envolver por engano em um programa de Intercâmbio Cultural de Interespécies, como consequência sua vida diária acaba tornando-se uma verdadeira bagunça."

  },
  {
    img: require("../../assets/img/Citrus.jpg"),
    title: "Citrus",
    desc: "A Yuzu e Mei se tornam irmãs quando seus pais decidem casar novamente. Tudo parecia bem, mas as duas são muitos diferentes e Yuzu passa por momentos difíceis quando precisa entrar em um novo colégio bastante rígido. Em certo ponto, após um beijo inesperado, a indecifrável e fria Mei começa a provocar sentimentos desconhecidos em Yuzu, que acredita estar apaixonada pela irmã."

  },
  {
    img: require("../../assets/img/KiminoNawa.webp"),
    title: "Your Name",
    desc: "Mitsuha é uma garota do ensino médio que mora na cidade de Itomori, na região montanhosa de Hida, Japão. Entediada com a vida no campo, deseja ter uma vida mais agitada, querendo mudar-se para Tóquio. Taki, um garoto do ensino médio que vive em Tóquio, começa a trocar de corpo com Mitsuha por várias vezes. Um dia as trocas param causando curiosidade em Taki motivando-o a procurar sobre o povoado de Mitsuha, o que o leva a uma terrível descoberta."

  },]

  return (
    <View style={styles.main}>

      {series.map( serie => (<Items image={serie.img} title={serie.title} desc={serie.desc}/>))}
     
    </View>
  
  )
}

const styles = StyleSheet.create({
  main:{
    width: "100%",
    paddingHorizontal: 40,
    paddingVertical: 20,
    gap: 30,
  }
})