import { View, Text, P } from 'dripsy'
import { TextLink } from 'solito/link'

export function ExampleScreen() {
  const pTag = '<P>'
  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}
      >This is a example screen powered by solito</Text>
      <P>This is a {pTag} tag powered by drispy</P>
      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
