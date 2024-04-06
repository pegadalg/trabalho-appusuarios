import { useState } from 'react'
import {Text,View,TextInput,TouchableOpacity,Alert,FlatList,} from "react-native";

import { styles } from './styles';
import { Users } from "../../components/Users";

type Props = {
  id: string,
  name: string,
  email: string,
  city: string
  
}


export function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [users, setUsers] = useState<Props[]>([])

  function handleAddNewUser() {

    const ExisteoEmail= users.filter(ExisteEmail => ExisteEmail.email === email.trim())

    if (ExisteoEmail.length>0) {
        return Alert.alert('Email', 'Este e-mail já está sendo utilizado')
      }
      
    if (name.trim() === "") {
      return Alert.alert('Nome', 'Favor preencha o campo "Nome do usuario" ')
    }

  if (email.trim() === "") {
      return Alert.alert('Email', 'Favor preencha o campo "Email do usuario" ')
    }
    if (city.trim() != "VR" && city.trim() != "BM" && city.trim() != "BP" && city.trim() != "RJ" && city.trim() != "SP" && city.trim() != "PH") {
      return Alert.alert('City', 'Cidades aceitas : VR , BM , BP , RJ , SP e PH ')
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      
    if (!emailRegex.test(email)) {
        return Alert.alert('Email', 'E-mail inválido. Por favor, insira um e-mail válido.');
      }



    const data = {
      id: String(new Date().getTime()),
      name,
      email,
      city
    }

    console.log(data)
    setUsers([...users, data])
    setName('')
    setEmail('')
    setCity('')

    // Criar uma validação com o email
    // Nào pode cadastrar o mesmo email para usuários diferentes
    // O cpf teve ter 11 caracteres

  }

  function handleRemoveUser(id: string) {
    Alert.alert('Remover', 'Remover o usuário', [
      {
        text: 'Sim',
        onPress: () => setUsers(users =>
          users.filter(user => user.id !== id))
      },
      {
        text: 'Nao',
        style: 'cancel'
      }
    ])
  }


  function handleTotal() {
  
    console.log(`Total de usuários cadastrados: ${users.length}`);
    
    const totalUsersVR = users.filter(user => user.city.trim().toUpperCase() === "VR").length;
    console.log(`Total de usuários em VR: ${totalUsersVR}`);

    const totalUsersBMePH = users.filter(user => ["BM", "PH"].includes(user.city.trim().toUpperCase())).length;
    console.log(`Total de usuários em BM ou PH: ${totalUsersBMePH}`);

    const totalNaoBPUsers = users.filter(user => user.city.trim().toUpperCase() !== "BP").length;
    console.log(`Total de usuários que não moram em BP: ${totalNaoBPUsers}`);
    console.log("")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Cadastro de Usuários
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do usuário"
          placeholderTextColor='#6B6B6B'
          autoCapitalize="words"
          value={name}
          onChangeText={value => setName(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email do usuário"
          placeholderTextColor='#6B6B6B'
          autoCapitalize="none"
          value={email}
          onChangeText={value => setEmail(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Cidade do usuário"
          placeholderTextColor='#6B6B6B'
          // keyboardType="numeric"
          value={city}
          onChangeText={value => setCity(value)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddNewUser}>
          <Text style={styles.buttonText}>
            Incluir
          </Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Users
            data={item}
            onRemove={() => handleRemoveUser(item.id)}
          />
        )}

      />


      <TouchableOpacity
        style={styles.button}
        onPress={handleTotal}>
        <Text style={styles.buttonText}>
          Total
        </Text>
      </TouchableOpacity>

    </View>
  )
}


