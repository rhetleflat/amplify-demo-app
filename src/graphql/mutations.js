/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSted = /* GraphQL */ `
  mutation CreateSted(
    $input: CreateStedInput!
    $condition: ModelStedConditionInput
  ) {
    createSted(input: $input, condition: $condition) {
      id
      sted
      adresse
      postnr
      poststed
      createdAt
      updatedAt
    }
  }
`;
export const updateSted = /* GraphQL */ `
  mutation UpdateSted(
    $input: UpdateStedInput!
    $condition: ModelStedConditionInput
  ) {
    updateSted(input: $input, condition: $condition) {
      id
      sted
      adresse
      postnr
      poststed
      createdAt
      updatedAt
    }
  }
`;
export const deleteSted = /* GraphQL */ `
  mutation DeleteSted(
    $input: DeleteStedInput!
    $condition: ModelStedConditionInput
  ) {
    deleteSted(input: $input, condition: $condition) {
      id
      sted
      adresse
      postnr
      poststed
      createdAt
      updatedAt
    }
  }
`;
export const createArrangement = /* GraphQL */ `
  mutation CreateArrangement(
    $input: CreateArrangementInput!
    $condition: ModelArrangementConditionInput
  ) {
    createArrangement(input: $input, condition: $condition) {
      id
      emne
      startTid
      sluttTid
      innhold
      utsendtDato
      purringer {
        items {
          id
          purreDato
          createdAt
          updatedAt
          arrangementPurringerId
        }
        nextToken
      }
      paakrevd {
        items {
          id
          createdAt
          updatedAt
          arrangementPaakrevdId
          arrangementIkkePaakrevdId
        }
        nextToken
      }
      ikkePaakrevd {
        items {
          id
          createdAt
          updatedAt
          arrangementPaakrevdId
          arrangementIkkePaakrevdId
        }
        nextToken
      }
      formsUrl
      sted {
        id
        sted
        adresse
        postnr
        poststed
        createdAt
        updatedAt
      }
      status {
        id
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      arrangementStedId
      arrangementStatusId
    }
  }
`;
export const updateArrangement = /* GraphQL */ `
  mutation UpdateArrangement(
    $input: UpdateArrangementInput!
    $condition: ModelArrangementConditionInput
  ) {
    updateArrangement(input: $input, condition: $condition) {
      id
      emne
      startTid
      sluttTid
      innhold
      utsendtDato
      purringer {
        items {
          id
          purreDato
          createdAt
          updatedAt
          arrangementPurringerId
        }
        nextToken
      }
      paakrevd {
        items {
          id
          createdAt
          updatedAt
          arrangementPaakrevdId
          arrangementIkkePaakrevdId
        }
        nextToken
      }
      ikkePaakrevd {
        items {
          id
          createdAt
          updatedAt
          arrangementPaakrevdId
          arrangementIkkePaakrevdId
        }
        nextToken
      }
      formsUrl
      sted {
        id
        sted
        adresse
        postnr
        poststed
        createdAt
        updatedAt
      }
      status {
        id
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      arrangementStedId
      arrangementStatusId
    }
  }
`;
export const deleteArrangement = /* GraphQL */ `
  mutation DeleteArrangement(
    $input: DeleteArrangementInput!
    $condition: ModelArrangementConditionInput
  ) {
    deleteArrangement(input: $input, condition: $condition) {
      id
      emne
      startTid
      sluttTid
      innhold
      utsendtDato
      purringer {
        items {
          id
          purreDato
          createdAt
          updatedAt
          arrangementPurringerId
        }
        nextToken
      }
      paakrevd {
        items {
          id
          createdAt
          updatedAt
          arrangementPaakrevdId
          arrangementIkkePaakrevdId
        }
        nextToken
      }
      ikkePaakrevd {
        items {
          id
          createdAt
          updatedAt
          arrangementPaakrevdId
          arrangementIkkePaakrevdId
        }
        nextToken
      }
      formsUrl
      sted {
        id
        sted
        adresse
        postnr
        poststed
        createdAt
        updatedAt
      }
      status {
        id
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      arrangementStedId
      arrangementStatusId
    }
  }
`;
export const createStatus = /* GraphQL */ `
  mutation CreateStatus(
    $input: CreateStatusInput!
    $condition: ModelStatusConditionInput
  ) {
    createStatus(input: $input, condition: $condition) {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateStatus = /* GraphQL */ `
  mutation UpdateStatus(
    $input: UpdateStatusInput!
    $condition: ModelStatusConditionInput
  ) {
    updateStatus(input: $input, condition: $condition) {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteStatus = /* GraphQL */ `
  mutation DeleteStatus(
    $input: DeleteStatusInput!
    $condition: ModelStatusConditionInput
  ) {
    deleteStatus(input: $input, condition: $condition) {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const createPurring = /* GraphQL */ `
  mutation CreatePurring(
    $input: CreatePurringInput!
    $condition: ModelPurringConditionInput
  ) {
    createPurring(input: $input, condition: $condition) {
      id
      purreDato
      createdAt
      updatedAt
      arrangementPurringerId
    }
  }
`;
export const updatePurring = /* GraphQL */ `
  mutation UpdatePurring(
    $input: UpdatePurringInput!
    $condition: ModelPurringConditionInput
  ) {
    updatePurring(input: $input, condition: $condition) {
      id
      purreDato
      createdAt
      updatedAt
      arrangementPurringerId
    }
  }
`;
export const deletePurring = /* GraphQL */ `
  mutation DeletePurring(
    $input: DeletePurringInput!
    $condition: ModelPurringConditionInput
  ) {
    deletePurring(input: $input, condition: $condition) {
      id
      purreDato
      createdAt
      updatedAt
      arrangementPurringerId
    }
  }
`;
export const createGruppe = /* GraphQL */ `
  mutation CreateGruppe(
    $input: CreateGruppeInput!
    $condition: ModelGruppeConditionInput
  ) {
    createGruppe(input: $input, condition: $condition) {
      id
      personer {
        items {
          id
          navn
          epost
          createdAt
          updatedAt
          gruppePersonerId
        }
        nextToken
      }
      createdAt
      updatedAt
      arrangementPaakrevdId
      arrangementIkkePaakrevdId
    }
  }
`;
export const updateGruppe = /* GraphQL */ `
  mutation UpdateGruppe(
    $input: UpdateGruppeInput!
    $condition: ModelGruppeConditionInput
  ) {
    updateGruppe(input: $input, condition: $condition) {
      id
      personer {
        items {
          id
          navn
          epost
          createdAt
          updatedAt
          gruppePersonerId
        }
        nextToken
      }
      createdAt
      updatedAt
      arrangementPaakrevdId
      arrangementIkkePaakrevdId
    }
  }
`;
export const deleteGruppe = /* GraphQL */ `
  mutation DeleteGruppe(
    $input: DeleteGruppeInput!
    $condition: ModelGruppeConditionInput
  ) {
    deleteGruppe(input: $input, condition: $condition) {
      id
      personer {
        items {
          id
          navn
          epost
          createdAt
          updatedAt
          gruppePersonerId
        }
        nextToken
      }
      createdAt
      updatedAt
      arrangementPaakrevdId
      arrangementIkkePaakrevdId
    }
  }
`;
export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
      id
      navn
      epost
      createdAt
      updatedAt
      gruppePersonerId
    }
  }
`;
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
      id
      navn
      epost
      createdAt
      updatedAt
      gruppePersonerId
    }
  }
`;
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
      id
      navn
      epost
      createdAt
      updatedAt
      gruppePersonerId
    }
  }
`;
