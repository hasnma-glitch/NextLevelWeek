type User = {
    name: string;
    address: {
        city: string;
        state: string;
    }
}

function createWelcomeMessage(user: User) {
    return 'Bem-Vindo, ${user.name}. Cidade: ${user.city} - ${user.state}!'
}

const welcomeMessage = createWelcomeMessage({
    name: 'Pilar',
    address: {
        city: 'Nova Lima',
        state: 'MG'
    }
})

//tpgem das propriedades

type ButtonProps = {
    title: string;
}

function Button(props) {
    return (
        <button>{props.title}</button>
    )
}

function App() {
    return (
        <div>
            <button title="Button 1" />
            <Button />
        </div>
    )
}