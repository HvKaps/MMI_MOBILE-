import { Stack } from 'expo-router';

export default function MiseEnPage() {
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: '#6C63FF' }, // Une belle couleur violette moderne
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}>
      <Stack.Screen name="index" options={{ title: 'Annuaire MMI' }} />
      <Stack.Screen name="details" options={{ title: 'Détails de la SAé' }} />
      <Stack.Screen name="ajouter-sae" options={{ title: 'Nouvelle SAé', presentation: 'modal' }} />
      <Stack.Screen name="ajouter-groupe" options={{ title: 'Nouveau Groupe', presentation: 'modal' }} />
    </Stack>
  );
}