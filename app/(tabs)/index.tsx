import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Alert } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import axios from 'axios';
import { API_URL } from '../../apiConfig';

export default function EcranAccueil() {
  const [listeSaes, setListeSaes] = useState<any[]>([]);

  useFocusEffect(
    useCallback(() => {
      axios.get(`${API_URL}/classement`)
        .then(reponse => setListeSaes(reponse.data))
        .catch(erreur => {
          console.log(erreur);
          Alert.alert("Erreur connexion", `Impossible de joindre le backend à l'adresse :\n${API_URL}\n\nVérifie que ton IP n'a pas changé dans apiConfig.tsx.`);
        });
    }, [])
  );

  return (
    <View style={styles.conteneur}>
      <Text style={styles.titrePage}>Annuaire des SAé MMI</Text>

      <FlatList
        data={listeSaes}
        ListEmptyComponent={<Text style={{textAlign: 'center', marginVertical: 20, fontStyle: 'italic', color: '#666'}}>Auncune SAé trouvée ou connexion en cours...</Text>}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.carteSae}
            onPress={() => {
              router.push({ 
                pathname: '/detail', 
                params: { donneesSae: JSON.stringify(item) } 
              });
            }}
          >
            <Text style={styles.titreSae}>{item.ueCorrespondante}</Text>
            <Text style={styles.sousTitreSae}>{item.domaine}  •  {item.annee}</Text>
            <Text style={styles.moyennePill}>Moyenne : {item.moyenneSae ? item.moyenneSae.toFixed(1) + '/20' : 'Aucune'}</Text>
            <Text style={styles.lien}>Voir les détails ➔</Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.boutonBas}>
        <Button 
          title="Créer une nouvelle SAé" 
          onPress={() => router.push('/ajouter-sae')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteneur: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#f8f9fa' },
  titrePage: { fontSize: 26, fontWeight: '800', marginBottom: 25, textAlign: 'center', color: '#1e293b' },
  carteSae: { backgroundColor: '#ffffff', padding: 20, marginBottom: 15, borderRadius: 12, borderWidth: 1, borderColor: '#e2e8f0', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 3, elevation: 2 },
  titreSae: { fontSize: 20, fontWeight: '800', color: '#0f172a', marginBottom: 4 },
  sousTitreSae: { fontSize: 14, color: '#64748b', marginBottom: 12, fontWeight: '500' },
  moyennePill: { alignSelf: 'flex-start', backgroundColor: '#f1f5f9', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 6, overflow: 'hidden', color: '#475569', fontWeight: 'bold', fontSize: 13 },
  lien: { color: '#3b82f6', marginTop: 15, fontWeight: '700', fontSize: 15 },
  boutonBas: { marginTop: 10, marginBottom: 30, borderRadius: 8, overflow: 'hidden' }
});