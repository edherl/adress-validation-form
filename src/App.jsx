import './App.css'
import { useForm } from "react-hook-form"

function App() {

  const { register, handleSubmit, setValue } = useForm()
  const onSubmit = event => event

  const check = e => {
    const cep = e.target.value.replace(/\D/g, '')
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        setValue('localidade', data.localidade)
        setValue('bairro', data.bairro)
        setValue('logradouro', data.logradouro)
        setValue('uf', data.uf)
        setValue('ddd', data.ddd)
      })
  }

  const checked = () => {
    setValue('cep', '')
    setValue('localidade', '')
    setValue('bairro', '')
    setValue('logradouro', '')
    setValue('uf', '')
    setValue('ddd', '')
  }

  return (
    <div>
      <h1>Consultando CEP</h1>
      <hr />
      <br />
      <form {...register('cep')} onBlur={check} onSubmit={handleSubmit(onSubmit)}>
        CEP
        <input type="text" {...register('cep')} id="cep"/>
        Cidade
        <input type="text" {...register('localidade')} id="localidade" />
        Bairro
        <input type="text" {...register('bairro')} id="bairro" />
        Logradouro
        <input type="text" {...register('logradouro')} id="logradouro" />
        UF
        <input type="text" {...register('uf')} id="uf" />
        DDD
        <input type="text" {...register('ddd')} id="ddd" />
        <br />
        <button onClick={checked}>Enviar</button>
      </form>
    </div>
  )
}

export default App
