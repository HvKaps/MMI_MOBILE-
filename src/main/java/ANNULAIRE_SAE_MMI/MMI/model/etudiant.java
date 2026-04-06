package ANNULAIRE_SAE_MMI.MMI.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class etudiant {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nomComplet;
    private Double note;

    @ManyToOne @JsonIgnore
    private groupe groupe;

    public etudiant() {}

    public Long getId() { return id; } public void setId(Long id) { this.id = id; }
    public String getNomComplet() { return nomComplet; } public void setNomComplet(String nomComplet) { this.nomComplet = nomComplet; }
    public Double getNote() { return note; } public void setNote(Double note) { this.note = note; }
    public groupe getGroupe() { return groupe; } public void setGroupe(groupe groupe) { this.groupe = groupe; }
}