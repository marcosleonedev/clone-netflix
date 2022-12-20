import { Container } from './styles'
import { Titulo, Descricao } from '../../components'

export function Inexistente(){
    return (
        <Container>
            <Titulo>Rota inexistente</Titulo>
            <Descricao>Essa rota não existe em nosso template</Descricao>
        </Container>
    )
}