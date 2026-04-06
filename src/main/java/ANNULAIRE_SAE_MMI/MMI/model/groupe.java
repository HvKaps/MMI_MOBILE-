package ANNULAIRE_SAE_MMI.MMI.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.ArrayList;
import java.util.List;

@Entity
public class groupe {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom, chefDeGroupe;

    @ManyToOne @JsonIgnore
    private sae sae;

    @OneToMany(mappedBy = "groupe", cascade = CascadeType.ALL)
    private List<etudiant> etudiants = new ArrayList<>();

    public groupe() {}

    public Long getId() { return id; } public void setId(Long id) { this.id = id; }
    public String getNom() { return nom; } public void setNom(String nom) { this.nom = nom; }
    public String getChefDeGroupe() { return chefDeGroupe; } public void setChefDeGroupe(String chefDeGroupe) { this.chefDeGroupe = chefDeGroupe; }
    public sae getSae() { return sae; } public void setSae(sae sae) { this.sae = sae; }
    public List<etudiant> getEtudiants() { return etudiants; } public void setEtudiants(List<etudiant> etudiants) { this.etudiants = etudiants; }

    public void addEtudiant(etudiant e) {
        int limite = (this.sae != null && this.sae.getMaxPersonnesParGroupe() != null)
                ? this.sae.getMaxPersonnesParGroupe() : 4;

        if (this.etudiants.size() >= limite) {
            throw new IllegalStateException("Le groupe a atteint la limite de " + limite + " personnes.");
        }
        etudiants.add(e);
        e.setGroupe(this);
    }
}