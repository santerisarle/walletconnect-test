import "@walletconnect/react-native-compat"
import { StyleSheet, Button, View } from "react-native"
import { useEffect, useState } from "react"
import SignClient from "@walletconnect/sign-client"

export default function App() {
  const [signClient, setSignClient] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        const client = await SignClient.init({
          projectId: "<projectId>",
          metadata: {
            name: "Test Wallet",
            description: "Test Wallet",
            url: "#",
            icons: ["https://walletconnect.com/walletconnect-logo.png"],
          },
        })

        setSignClient(client)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  const pair = async () => {
    try {
      await signClient.core.pairing.pair({ uri: "test" })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Button onPress={pair} title="Test pairing" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
