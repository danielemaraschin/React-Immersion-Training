
import MainGrid from '../src/components/MainGrid'

export default function Home() {
  return (
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <Box >
          <img src="https://github.com/danielemaraschin.png"/>
        </Box>
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          Bem vindo
        </Box>
        <Box>
          Scrapt
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <Box>
          Amigos
        </Box>
        <Box>
          Comunidades
        </Box>
      </div>


    </MainGrid>)
}
