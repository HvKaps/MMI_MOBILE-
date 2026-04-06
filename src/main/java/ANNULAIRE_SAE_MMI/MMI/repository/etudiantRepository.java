package ANNULAIRE_SAE_MMI.MMI.repository;

import ANNULAIRE_SAE_MMI.MMI.model.etudiant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface etudiantRepository extends JpaRepository<etudiant, Long> {
}