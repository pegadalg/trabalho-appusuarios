import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type Props = {
  id: string,
  name: string,
  email: string,
  city: string
}

type PropsData = {
  data: Props
  onRemove: () => void
}

export function Users({ data, onRemove }: PropsData) {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.middle}>
          <Text style={styles.name}>
            {data.name}
          </Text>
          <Text style={styles.name}>
            {data.email}
          </Text>
          <Text style={styles.name}>
            {data.city}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={onRemove}
        >
          <Text>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

