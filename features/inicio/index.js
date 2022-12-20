import { Container } from './styles'
import { Titulo, Descricao } from '../../components'

export function Inicio(){
    return (
        <Container>
            <Titulo>Rota inicial</Titulo>
            <Descricao>Seja bem vindo a rota inicial do nosso template</Descricao>
        </Container>
    )
}