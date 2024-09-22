import React, { useEffect, useState } from 'react'
import imag from './../assets/images/m5.webp'
import { useTranslation } from 'react-i18next'


function ArticleTree() {
    const {t, i18n} = useTranslation()
    // const [ThreeBlog, setThreeBlog] =useState([])
    // useEffect(() => {
    //     window.scroll(0,0)
    //     axiosInstance
    //         .get(`blogs/three`)
    //         .then((res) => {
    //             setThreeBlog(res.data)
    //         })
    //         .catch((err) => {
    //         console.log(err);
    //         });
    // })
  return (
    <>
        <div className="article-tree">
            <p className='container text-white font-bold text-6xl text-left pt-5'>{t('blogs')}</p>
                {i18n.language === 'en' ? (
                            <div className="container">
                                <div className='p-2 md:flex md:items-center'>
                                    <img  className='w-full md:w-1/2 h-full' src={imag} alt="" />
                                    <p className='w-full md:w-1/2 m-auto p-2 text-white textsm lg:text-2xl'>Play is one of the most effective learning tools for children. While playing, children develop important skills such as problem-solving, teamwork, and creativity. Especially structured games improve their attention and concentration skills. Additionally, games help children socialize and develop their emotional intelligence. When parents participate in their children's play, it not only supports their learning but also boosts their confidence and strengthens the bond between them.</p>
                                </div>
                                <div className='p-2 md:flex md:items-center'>
                                    <p className='hidden md:block w-full md:w-1/2 m-auto p-2 text-white textsm lg:text-2xl'>Balanced nutrition is crucial for the healthy growth and development of children. Eating habits are often established at an early age and tend to continue throughout life. Therefore, children should be offered foods rich in fruits, vegetables, whole grains, and proteins. Limiting the consumption of fast food and junk food reduces the risk of obesity and other health issues. Moreover, children should be taught the importance of drinking water and encouraged to drink it regularly.</p>
                                    <img  className='w-full md:w-1/2 h-full' src={imag} alt="" />
                                    <p className='md:hidden w-full md:w-1/2 m-auto p-2 text-white textsm lg:text-2xl'>Balanced nutrition is crucial for the healthy growth and development of children. Eating habits are often established at an early age and tend to continue throughout life. Therefore, children should be offered foods rich in fruits, vegetables, whole grains, and proteins. Limiting the consumption of fast food and junk food reduces the risk of obesity and other health issues. Moreover, children should be taught the importance of drinking water and encouraged to drink it regularly.</p>
                                </div>
                                <div className='p-2 md:flex md:items-center'>
                                    <img  className='w-full md:w-1/2 h-full' src={imag} alt="" />
                                    <p className='w-full md:w-1/2 m-auto p-2 text-white textsm lg:text-2xl'>In today's world, where technology increasingly dominates our lives, it is inevitable for children to become familiar with it. However, the correct and conscious use of technology is essential. Spending excessive time in front of screens can reduce physical activities and disrupt sleep patterns in children. Therefore, it's important to ensure that children use technology for limited periods and with appropriate content. Parents should monitor their children's screen time and guide them on safe internet usage.</p>
                                </div>
                            </div>
                            ):(
                                null
                            )}
                            {i18n.language === 'tm' ? (

                            <div className="container">
                                <div className='p-2 md:flex md:items-center'>
                                    <img  className='w-full md:w-1/2 h-full' src={imag} alt="" />
                                    <p className='w-full md:w-1/2 m-auto p-2 text-white textsm lg:text-2xl'>Oýun, çagalar üçin iň täsirli okuw gurallaryndan biridir. Çagalar oýnap ýörkä, meseläni çözmek, toparlaýyn işlemek we döredijilik ýaly möhüm endikleri ösdürýärler. Esasanam düzülen oýunlar olaryň ünsüni we konsentrasiýa ukyplaryny ýokarlandyrýar. Mundan başga-da, oýunlar çagalara ýakynlaşmaga we emosional akyllaryny ösdürmäge kömek edýär. Ene-atalar çagalarynyň oýnuna gatnaşanlarynda, bu diňe bir olaryň okuwyny goldamak bilen çäklenmän, eýsem olaryň ynamyny artdyrýar we arasyndaky baglanyşygy güýçlendirýär.</p>
                                </div>
                                <div className='p-2 md:flex md:items-center'>
                                    <p className='hidden md:block w-full md:w-1/2 m-auto p-2 text-white textsm lg:text-2xl'>Deňagramly iýmitlenmek çagalaryň sagdyn ösmegi we ösmegi üçin möhümdir. Iýmitlenmek endikleri köplenç ir ýaşda döredilýär we ömrüň dowamynda dowam edýär. Şonuň üçin çagalara miwelere, gök önümlere, tutuş dänelere we beloklara baý iýmitler hödürlenmeli. Çalt iýmit we gereksiz iýmitleriň sarp edilmegini çäklendirmek semizlik we beýleki saglyk meselelerini azaldar. Mundan başga-da, çagalara agyz suwunyň ähmiýetini öwretmeli we ony yzygiderli içmäge höweslendirmeli.</p>
                                    <img  className='w-full md:w-1/2 h-full' src={imag} alt="" />
                                    <p className='md:hidden w-full md:w-1/2 m-auto p-2 text-white textsm lg:text-2xl'>Deňagramly iýmitlenmek çagalaryň sagdyn ösmegi we ösmegi üçin möhümdir. Iýmitlenmek endikleri köplenç ir ýaşda döredilýär we ömrüň dowamynda dowam edýär. Şonuň üçin çagalara miwelere, gök önümlere, tutuş dänelere we beloklara baý iýmitler hödürlenmeli. Çalt iýmit we gereksiz iýmitleriň sarp edilmegini çäklendirmek semizlik we beýleki saglyk meselelerini azaldar. Mundan başga-da, çagalara agyz suwunyň ähmiýetini öwretmeli we ony yzygiderli içmäge höweslendirmeli.</p>
                                </div>
                                <div className='p-2 md:flex md:items-center'>
                                    <img  className='w-full md:w-1/2 h-full' src={imag} alt="" />
                                    <p className='w-full md:w-1/2 m-auto p-2 text-white textsm lg:text-2xl'>Tehnologiýanyň durmuşymyzda barha agdyklyk edýän häzirki dünýäsinde çagalaryň bu zatlar bilen tanyş bolmagy gutulgysyzdyr. Şeýle-de bolsa, tehnologiýany dogry we aňly ulanmak zerurdyr. Ekranyň öňünde aşa köp wagt geçirmek fiziki işjeňligi azaldyp, çagalarda uky düzgünini bozup biler. Şonuň üçin çagalaryň çäkli döwürlerde we degişli mazmun bilen tehnologiýalary ulanmagyny üpjün etmek möhümdir. Ene-atalar çagalarynyň ekran wagtyna gözegçilik etmeli we internetiň howpsuz ulanylyşyna ýol görkezmeli.</p>
                                </div>
                            </div>
                            ):(
                                null
                            )}
                            {i18n.language === 'ru' ? (

                            <div className="container">
                                <div className='p-2 md:flex md:items-center'>
                                    <img  className='w-full md:w-1/2 h-full' src={imag} alt="" />
                                    <p className='w-full md:w-1/2 m-auto p-2 text-white textsm lg:text-2xl'>Игра — один из самых эффективных инструментов обучения для детей. Играя, дети развивают такие важные навыки, как решение проблем, командная работа и креативность. Особенно структурированные игры улучшают их внимание и концентрацию. Кроме того, игры помогают детям социализироваться и развивать эмоциональный интеллект. Когда родители участвуют в игре своих детей, это не только поддерживает их обучение, но и повышает их уверенность в себе и укрепляет связь между ними.</p>
                                </div>
                                <div className='p-2 md:flex md:items-center'>
                                    <p className='hidden md:block w-full md:w-1/2 m-auto p-2 text-white textsm lg:text-2xl'>Сбалансированное питание имеет решающее значение для здорового роста и развития детей. Пищевые привычки часто устанавливаются в раннем возрасте и, как правило, сохраняются на протяжении всей жизни. Поэтому детям следует предлагать продукты, богатые фруктами, овощами, цельными зернами и белками. Ограничение потребления фастфуда и нездоровой пищи снижает риск ожирения и других проблем со здоровьем. Более того, детей следует учить важности питьевой воды и поощрять пить ее регулярно.</p>
                                    <img  className='w-full md:w-1/2 h-full' src={imag} alt="" />
                                    <p className='md:hidden w-full md:w-1/2 m-auto p-2 text-white textsm lg:text-2xl'>Сбалансированное питание имеет решающее значение для здорового роста и развития детей. Пищевые привычки часто устанавливаются в раннем возрасте и, как правило, сохраняются на протяжении всей жизни. Поэтому детям следует предлагать продукты, богатые фруктами, овощами, цельными зернами и белками. Ограничение потребления фастфуда и нездоровой пищи снижает риск ожирения и других проблем со здоровьем. Более того, детей следует учить важности питьевой воды и поощрять пить ее регулярно.</p>
                                </div>
                                <div className='p-2 md:flex md:items-center'>
                                    <img  className='w-full md:w-1/2 h-full' src={imag} alt="" />
                                    <p className='w-full md:w-1/2 m-auto p-2 text-white textsm lg:text-2xl'>В современном мире, где технологии все больше доминируют в нашей жизни, дети неизбежно должны с ними познакомиться. Однако правильное и осознанное использование технологий имеет важное значение. Чрезмерное времяпрепровождение перед экранами может снизить физическую активность и нарушить режим сна у детей. Поэтому важно обеспечить, чтобы дети использовали технологии в течение ограниченного времени и с соответствующим контентом. Родители должны контролировать время, которое дети проводят у экрана, и давать им рекомендации по безопасному использованию интернета.</p>
                                </div>
                            </div>
                            ):(
                                null
                            )}
        </div> 
    </>
  )
}

export default ArticleTree