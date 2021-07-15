import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
    <hr/>
    <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
      @{propriedades.githubUser}
    </a>
    <hr />
    <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = "danielemaraschin";
  const pessoasFavoritas = [
    'juniornvieira',
    'ezequielkm',
    'nkneip',
    'phr1990',
    'peas',
    'omariosouto',
    'juunegreiros',
    'felipefialho',
    'marcobrunodev'
  ]
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Welcome
            </h1>
            <OrkutNostalgicIconSet/>
          </Box>
          <Box>
            <h2>What do you want to do?</h2>
            <form>
              <div>
                <input 
                 placeholder="What will your community name be?" 
                 name="title"
                 aria-label="Qual será o nome da sua comunidade?"                
                />
              </div>
              <div>
                <input 
                 placeholder="What will your community name be?" 
                 name="title"
                 aria-label="Qual será o nome da sua comunidade?"                
                />
              </div>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Friends ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}

            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>)
}
