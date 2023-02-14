/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSted = /* GraphQL */ `
  query GetSted($id: ID!) {
    getSted(id: $id) {
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
export const listSteds = /* GraphQL */ `
  query ListSteds(
    $filter: ModelStedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSteds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sted
        adresse
        postnr
        poststed
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getArrangement = /* GraphQL */ `
  query GetArrangement($id: ID!) {
    getArrangement(id: $id) {
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
export const listArrangements = /* GraphQL */ `
  query ListArrangements(
    $filter: ModelArrangementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArrangements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        emne
        startTid
        sluttTid
        innhold
        utsendtDato
        purringer {
          nextToken
        }
        paakrevd {
          nextToken
        }
        ikkePaakrevd {
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
      nextToken
    }
  }
`;
export const getStatus = /* GraphQL */ `
  query GetStatus($id: ID!) {
    getStatus(id: $id) {
      id
      status
      createdAt
      updatedAt
    }
  }
`;
export const listStatuses = /* GraphQL */ `
  query ListStatuses(
    $filter: ModelStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStatuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPurring = /* GraphQL */ `
  query GetPurring($id: ID!) {
    getPurring(id: $id) {
      id
      purreDato
      createdAt
      updatedAt
      arrangementPurringerId
    }
  }
`;
export const listPurrings = /* GraphQL */ `
  query ListPurrings(
    $filter: ModelPurringFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPurrings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        purreDato
        createdAt
        updatedAt
        arrangementPurringerId
      }
      nextToken
    }
  }
`;
export const getGruppe = /* GraphQL */ `
  query GetGruppe($id: ID!) {
    getGruppe(id: $id) {
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
export const listGruppes = /* GraphQL */ `
  query ListGruppes(
    $filter: ModelGruppeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGruppes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        personer {
          nextToken
        }
        createdAt
        updatedAt
        arrangementPaakrevdId
        arrangementIkkePaakrevdId
      }
      nextToken
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
      id
      navn
      epost
      createdAt
      updatedAt
      gruppePersonerId
    }
  }
`;
export const listPeople = /* GraphQL */ `
  query ListPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeople(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
