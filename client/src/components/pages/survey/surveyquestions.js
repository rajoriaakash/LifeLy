import React, { useState } from 'react'

const SurveyQuestions = () => {
  const [question1, setquestion1] = useState()
  const [question2, setquestion2] = useState()
  const [question3, setquestion3] = useState()
  const [question4, setquestion4] = useState()
  const [question5, setquestion5] = useState()
  const [question6, setquestion6] = useState()
  const [question7, setquestion7] = useState()
  const [question8, setquestion8] = useState()
  const [question9, setquestion9] = useState()
  const [question10, setquestion10] = useState()
  const [question11, setquestion11] = useState()
  const [question12, setquestion12] = useState()
  const [question13, setquestion13] = useState()
  const [question14, setquestion14] = useState()
  const [question15, setquestion15] = useState()
  const [question16, setquestion16] = useState()
  const [question17, setquestion17] = useState()
  const [question18, setquestion18] = useState()
  const [question19, setquestion19] = useState()
  const [question20, setquestion20] = useState()
  const [question21, setquestion21] = React.useState()
  const [question22, setquestion22] = React.useState()
  const [question23, setquestion23] = React.useState()
  const [question24, setquestion24] = React.useState()
  const [question25, setquestion25] = React.useState()
  const [question26, setquestion26] = React.useState()
  const [question27, setquestion27] = React.useState()
  const [question28, setquestion28] = React.useState()
  const [question29, setquestion29] = React.useState()
  const [question30, setquestion30] = React.useState()

  const surveyQuestions = [
    {
      id: 1,
      question: 'Does/did your child notice small sounds when others do not ?',
      qno: { question1 },
      qnosetter: setquestion1
    },
    {
      id: 2,
      question:
        'Does/did your child usually concentrate more on the whole picture, rather than the small details ?',
      qno: { question2 },
      qnosetter: setquestion2
    },
    {
      id: 3,
      question:
        'Does/did your child find it easy to do more than one thing at once ?',
      qno: { question3 },
      qnosetter: setquestion3
    },
    {
      id: 4,
      question:
        'If there is an interruption, can he/she switch back to what he/she was doing very quickly?',
      qno: { question4 },
      qnosetter: setquestion4
    },
    {
      id: 5,
      question:
        ' Can your child find it easy to ‘read between the lines’ when someone is talking to him/her?',
      qno: { question5 },
      qnosetter: setquestion5
    },
    {
      id: 6,
      question:
        ' Can he know how to tell if someone listening to him/her is getting bored?',
      qno: { question6 },
      qnosetter: setquestion6
    },
    {
      id: 7,
      question:
        'Does your child find it difficult to work out the characters’ intentions while reading the story?',
      qno: { question7 },
      qnosetter: setquestion7
    },
    {
      id: 8,
      question:
        'Does your child like to collect information about categories of things (e.g. types of car, types of bird, types of train, types of plant etc)?',
      qno: { question8 },
      qnosetter: setquestion8
    },
    {
      id: 9,
      question:
        ' Does he find it easy to work out what someone is thinking or feeling just by looking at their face?',
      qno: { question9 },
      qnosetter: setquestion9
    },
    {
      id: 10,
      question: 'Does he find it difficult to work out people’s intentions ?',
      qno: { question10 },
      qnosetter: setquestion10
    },
    {
      id: 11,
      question: ' Does your child become easily distracted?',
      qno: { question11 },
      qnosetter: setquestion11
    },
    {
      id: 12,
      question:
        'Does your child forget to do chores or lose school assignments?',
      qno: { question12 },
      qnosetter: setquestion12
    },
    {
      id: 13,
      question:
        'Does your child struggle to follow instructions or pay attention to details?',
      qno: { question13 },
      qnosetter: setquestion13
    },
    {
      id: 14,
      question:
        'Does your child have difficulty managing time or following through with tasks?',
      qno: { question14 },
      qnosetter: setquestion14
    },
    {
      id: 15,
      question:
        'Does your child become easily frustrated with difficult tasks?',
      qno: { question15 },
      qnosetter: setquestion15
    },
    {
      id: 16,
      question:
        'Does your child fidget or squirm and have trouble being still? Does it interfere with his education or ability to function socially?',
      qno: { question16 },
      qnosetter: setquestion16
    },
    {
      id: 17,
      question:
        'Does your child interrupt others or have trouble taking turns?',
      qno: { question17 },
      qnosetter: setquestion17
    },
    {
      id: 18,
      question:
        ' Does your child talk rapidly and find it difficult to participate quietly?',
      qno: { question18 },
      qnosetter: setquestion18
    },
    {
      id: 19,
      question:
        'Does your child have trouble coping with stressful situations?',
      qno: { question19 },
      qnosetter: setquestion19
    },
    {
      id: 20,
      question: 'Does he find it difficult to work out people’s intentions ?',
      qno: { question20 },
      qnosetter: setquestion20
    },
    {
      id: 21,
      question: 'Does your child ever say that words “wiggle” or “shimmer” on the page while he’s reading?',
      qno: { question21 },
      qnosetter: setquestion21
    },
    {
      id: 22,
      question:
        'Does your child complain of headaches, stomachaches, or dizziness when reading ?',
      qno: { question22 },
      qnosetter: setquestion22
    },
    {
      id: 23,
      question:
        ' Does your child spell inconsistently, misspelling words she already knows ?',
      qno: { question23 },
      qnosetter: setquestion23
    },
    {
      id: 24,
      question:
        'Does your child have difficulty sustaining attention ? Does she space out or get labeled a “daydreamer” ?',
      qno: { question24 },
      qnosetter: setquestion24
    },
    {
      id: 25,
      question:
        ' Is your child of average or above-average intelligence, but seems unable to read at her grade level?',
      qno: { question25 },
      qnosetter: setquestion25
    },
    {
      id: 26,
      question:
        ' Does your child struggle with word problems — even though he’s otherwise good at math?',
      qno: { question26 },
      qnosetter: setquestion26
    },
    {
      id: 27,
      question:
        'Does your child struggle to copy letters, numbers, or symbols?',
      qno: { question27 },
      qnosetter: setquestion27
    },
    {
      id: 28,
      question:
        ' Does your child avoid reading altogether, or does she get easily frustrated when completing reading-related assignments ?',
      qno: { question28 },
      qnosetter: setquestion28
    },
    {
      id: 29,
      question:
        'Does your child have difficulty budgeting her time or following a schedule ?',
      qno: { question29 },
      qnosetter: setquestion29
    },
    {
      id: 30,
      question: 'When reading out loud, does your child repeat words, mix up letters, or change word order without noticing ?',
      qno: { question30 },
      qnosetter: setquestion30
    }
  ]

  return surveyQuestions
}

export default SurveyQuestions
